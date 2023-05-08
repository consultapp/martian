export default function SvgComponent({ svg }) {
  return (
    <div className="svg_render">
      {render ? (
        <img
          src={svg}
          width="100%"
          // height="150"
          alt={alt}
        />
      ) : (
        <div className="placeholder place-hold">placeholder</div>
      )}
    </div>
  );
}
