  "use client";


  import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
  } from "react";
  import { cn } from "../lib/utils";
  import { AnimatePresence, motion } from "framer-motion";
  import Image, { ImageProps } from "next/image";
  import { useOutsideClick } from "../hooks/use-outside-click";

  interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
  }

  type Card = {
      src: string;
      color: string;
      title: string;
      category: string;
      content: string[];  // Updated to be an array of strings
      link: string
  };

  export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
  }>({
    onCardClose: () => {},
    currentIndex: 0,
  });

  export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = initialScroll;
        checkScrollability();
      }
    }, [initialScroll]);

    const checkScrollability = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    const handleCardClose = (index: number) => {
      if (carouselRef.current) {
        const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
        const gap = isMobile() ? 4 : 8;
        const scrollPosition = (cardWidth + gap) * (index + 1);
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    };

    const isMobile = () => {
      return window && window.innerWidth < 768;
    };

    return (
      <CarouselContext.Provider
        value={{ onCardClose: handleCardClose, currentIndex }}
      >
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div
              className={cn(
                "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
              )}
            ></div>

            <div
              className={cn(
                "flex flex-row justify-start gap-4 pl-4",
                "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
              )}
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      once: true,
                    },
                  }}
                  key={"card" + index}
                  className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 mr-10">
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
            </button>
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </CarouselContext.Provider>
    );
  };

  export const Card = ({
      card,
      index,
      layout = false,
    }: {
      card: Card;
      index: number;
      layout?: boolean;
    }) => {
      const [open, setOpen] = useState(false);
      const containerRef = useRef<HTMLDivElement>(null);
      const { onCardClose, currentIndex } = useContext(CarouselContext);
    
      useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
          if (event.key === "Escape") {
            handleClose();
          }
        }
    
        if (open) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [open]);
    
      useOutsideClick(containerRef, () => handleClose());
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        onCardClose(index);
      };
    
      return (
        <>
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 h-screen z-50 overflow-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  ref={containerRef}
                  layoutId={layout ? `card-${card.title}` : undefined}
                  className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
                >
                  <button
                    className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                    onClick={handleClose}
                  >
                  </button>
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="text-base font-medium text-black dark:text-white"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                  >
                    {card.title}
                  </motion.p>
                  <div className="font-sans text-white text-sm mt-1 text-left">
                      {card.content.map((item, index) => (
                          <motion.p key={index} className="mt-1">
                          {item}
                          </motion.p>
                      ))}
                  </div>


                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <motion.div
              layoutId={layout ? `card-${card.title}` : undefined}
              className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 group"
              >
              <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
              <div className="relative z-40 p-8">
              <motion.p
              layoutId={layout ? `category-${card.category}` : undefined}
              style={{ color: card.color }} // Set text color dynamically
              className="text-sm md:text-base font-medium font-sans text-left"
              >
              {card.category}
              </motion.p>
              <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              style={{ color: card.color }} // Set text color dynamically
              className="text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
              >
              {card.title}
              </motion.p>
              <div
                  className="font-sans text-sm mt-1 text-left sm:block hidden"
                  style={{ color: card.color }}
                  >
                  {card.content.map((item, index) => (
                      <motion.p key={index} className="mt-1">
                      {item}
                      </motion.p>
                  ))}
              </div>

              </div>
              <BlurImage
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover absolute z-10 inset-0"
              />
              <div
                  className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
              >
                  <a
                  href={card.link}
                  className="font-sans block w-full px-8 py-4 text-center bg-teal-500 text-white font-bold transition duration-200 hover:bg-black hover:text-white"
                  >
                  Learn more
                  </a>
              </div>
          </motion.div>



        </>
      );
    };
    

  export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
  }: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
      <Image
          className={cn(
              "transition duration-300",
              isLoading ? "blur-0" : "gradient-blur",
              className
          )}
          onLoad={() => setLoading(false)}
          src={src}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          blurDataURL={typeof src === "string" ? src : undefined}
          alt={alt ? alt : "Background of a beautiful view"}
          {...rest}
      />

    );
  };

  export function ProjectsCarousel() {
      const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    
      return (
        <Carousel items={cards} />
      );
      
      
      
    }
    
    const data = [
      {
        color: "white",
        category: "Full Stack/Database/ML",
        title: "YouTube Data Pipeline",
        src: "/images/youtubepipeline.png",
        content: ["Real-time sentiment analysis pipeline for YouTube comments.", "Built using:", "▶ Google Cloud", "▶ Apache Kafka", "▶ Apache Spark", "▶ Zookeeper", "Fetches comments via YouTube API and processes them in real time.", "Utilizes bootstrapped servers for fault tolerance and scalability."],
        link: "https://hxu64.github.io/posts/youtube-analysis/"
      },
      {
        color: "white",
        category: "Full Stack",
        title: "FJudge",
        src: "/images/fjudge.png",
        content: ["Highly customizable judge/grader for competitive programming contests and training.", "Built using:", "▶ C/C++", "▶ Python", "▶ Flask", "Hosted and judged over 4 contests", "Extensively used multithreading to ensure performance"],
        link: "https://replit.com/@summer8n2/fjudge"
      },
      {
        color: "black",
        category: "Full Stack",
        title: "LuaBot",
        src: "/images/lua.png",
        content: ["A virtual currency/trading simulator, used to illustrate mathematical and economic concepts", "Built using:", "▶ C/C++", "▶ Python", "▶ SQL", "▶ React/Next.JS", "Designed with scability in mind, handled inputs from hundreds of users in final rounds of testing"],
        link: "https://replit.com/@summer8n2/lua-bot"
      }
    ];
    