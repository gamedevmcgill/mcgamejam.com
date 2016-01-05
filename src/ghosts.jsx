import React from 'react';
import {StaggeredMotion, spring} from 'react-motion';
const presets = {
  noWobble: [170, 26], // the default
  gentle: [120, 14],
  wobbly: [180, 12],
  stiff: [210, 20]
};
const Ghosts = React.createClass({
  getInitialState() {
    return {x: 250, y: 300, hidden:false};
  },

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  },

  handleMouseMove({pageX: x, pageY: y}) {
    x+=50;
    this.setState({x, y});
  },

  handleTouchMove({touches}) {
    this.handleMouseMove(touches[0]);
  },

  getStyles(prevStyles) {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
            x: spring(prevStyles[i - 1].x, presets.gentle),
            y: spring(prevStyles[i - 1].y, presets.gentle),
          };
    });
    return endValue;
  },

  render() {
    return (
      <StaggeredMotion
        defaultStyles={[0,1,2,3].map((e,i) => ({x: 0, y: 0}))}
        styles={this.getStyles}>
        {balls =>
          <div className="ghost">
            {balls.map(({x, y}, i) =>
              <div
                key={i}
                className={`ghost-ball ball-${i}`}
                style={{
                  WebkitTransform: `translate3d(${x - 25 + i*50}px, ${y - 25}px, 0)`,
                  transform: `translate3d(${x - 25 + i*50}px, ${y - 25}px, 0)`,
                  zIndex: balls.length - i + 1,
                }} />
            )}
          </div>
        }
      </StaggeredMotion>
    );
  },
});

ReactDOM.render(<Ghosts/>, document.getElementById('ghosts'));