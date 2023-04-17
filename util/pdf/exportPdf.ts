import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { applyA4Style } from "./a4Style";

export async function generatePdf(ref: React.RefObject<HTMLElement>, name : String) {
  if (!ref.current) return;
  applyA4Style(ref);
  try {

    const img = new Image();
    img.src = await toPng(ref.current);

    img.onload = () => {
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const aspectRatio = img.width / img.height;
      let imgWidth = pdfWidth;
      let imgHeight = imgWidth / aspectRatio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * aspectRatio;
      }

      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      pdf.addImage(img, "PNG", x, y, imgWidth, imgHeight);
      pdf.save(`${name.trim().replace(" ", "")}.pdf`);

      window.location.reload();
    };
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  }
}
