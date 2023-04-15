export function applyA4Style(ref: React.RefObject<HTMLElement>) {
  if (!ref.current) return;

  const originalStyle = ref.current.getAttribute("style");
  const a4WidthInPx = 300 * 3.78; 

  ref.current.style.width = `${a4WidthInPx}px`;
  ref.current.style.height = "auto";
  ref.current.style.alignItems = "start";
  ref.current.style.overflowX = "hidden";
  ref.current.style.padding = "0";
  ref.current.style.margin = "0";

  return () => {
    if (ref.current) {
      ref.current.setAttribute("style", originalStyle || "");
    }
  };
}
