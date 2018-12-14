import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/theme-context";
import Link from "next/link";
import "./button.scss";

class Button extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
    href: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    label: "",
    fullWidth: false,
    className: "",
    disabled: false,
    handleClick: null,
    type: null
  };

  render() {
    const { handleClick, href, label, disabled, className, type } = this.props;
    const theme = this.context;
    const btnClass = `btn ${theme} ${className}`;

    if (href) {
      return (
        <Link href={href}>
          <button className={btnClass} disabled={disabled}>
            {label}
          </button>
        </Link>
      );
    } else {
      return (
        <button
          type={type}
          className={btnClass}
          onClick={handleClick}
          disabled={disabled}
        >
          {label}
        </button>
      );
    }
  }
}

Button.contextType = ThemeContext;

export default Button;
