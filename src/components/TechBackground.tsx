/**
 * Site-wide ambient background: an engineering-drawing grid that drifts
 * diagonally one cell every ~20s. Pure CSS transform animation — runs on
 * the compositor, so it costs effectively nothing, even on phones.
 * Sections with solid backgrounds (ink panels, cards) naturally sit on
 * top of the sheet.
 */
import GridSpotlight from "@/components/GridSpotlight";

export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="tech-grid absolute -inset-[96px]" />
      <GridSpotlight />
      <div className="tech-vignette absolute inset-0" />
    </div>
  );
}
