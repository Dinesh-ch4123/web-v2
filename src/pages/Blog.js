import React, { useEffect, useRef, useState, useMemo } from "react";

import BlogHeader from "../components/BlogHeader";
import BlogContent from "../components/BlogContent";

const Blog = ({
  setscrollToProduct,
  setscrollToPricing,
  setScrollTocontactus,
  ContactusRef,
  isDarkMode,
  setCookiesopen,
}) => {
  const abouref = useRef(null);
  const blogRef = useRef(null);
  const timelineRef = useRef(null);
  const benefitsRef = useRef(null);

  const [activeSection, setactiveSection] = useState("about");

  const isInViewport1 = useIsInViewport(abouref);

  const isInViewport2 = useIsInViewport(timelineRef);

  const isInViewport3 = useIsInViewport(benefitsRef);

  useEffect(() => {
    if (isInViewport3) {
      setactiveSection("benefits");
    } else if (isInViewport2) {
      setactiveSection("timeline");
    } else if (isInViewport1) {
      setactiveSection("about");
    } else {
      setactiveSection(activeSection);
    }
  }, [isInViewport1, isInViewport2, isInViewport3]);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const [selectedblog, setSelectedBlog] = useState("");
  useEffect(() => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
    setSelectedBlog(window.location.href.split("?")[1]);
  }, []);

  const [selectedblogContent, setSelectedBlogContent] = useState(null);

  return (
    <div>
    <div ref={blogRef}>
      <BlogHeader
        setSelectedBlog={setSelectedBlog}
        setSelectedBlogContent={setSelectedBlogContent}
        selectedblog={selectedblog}
        setactiveSection={setactiveSection}
        activeSection={activeSection}
        benefitsRef={benefitsRef}
        timelineRef={timelineRef}
        abouref={abouref}
        isDarkMode={isDarkMode}
      />
      <BlogContent
        setscrollToPricing={setscrollToPricing}
        setscrollToProduct={setscrollToProduct}
        setScrollTocontactus={setScrollTocontactus}
        ContactusRef={ContactusRef}
        selectedblogContent={selectedblogContent}
        benefitsRef={benefitsRef}
        timelineRef={timelineRef}
        abouref={abouref}
        setCookiesopen={setCookiesopen}
        isDarkMode={isDarkMode}
      />
    </div>
    </div>
  );
};

export default Blog;
