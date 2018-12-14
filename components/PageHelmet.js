import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

class PageHelmet extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    title: "",
    description: ""
  };

  render() {
    const { title, description } = this.props;
    return (
      <Helmet>
        {title.length > 0 && <title>{title}</title>}
        {description.length > 0 && (
          <meta name="description" content={description} />
        )}
      </Helmet>
    );
  }
}

export default PageHelmet;
