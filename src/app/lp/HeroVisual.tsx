import { CurrentProductScreen } from "./CurrentProductScreen";

export function HeroVisual() {
  return (
    <figure className="hero-product hero-enter">
      <div className="laptop-mockup">
        <div className="laptop-display">
          <span className="laptop-camera" aria-hidden="true" />
          <div className="laptop-screen">
            <CurrentProductScreen />
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true">
          <span />
        </div>
      </div>
    </figure>
  );
}
