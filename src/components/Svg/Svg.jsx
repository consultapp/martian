export default function SvgComponent({ svg, alt }) {
  return (
    <div className="svg_render">
      {svg ? (
        <img src={svg} width="100%" alt={alt || ""} />
      ) : (
        <div className="placeholder place-hold">placeholder</div>
      )}
    </div>
  );
}
