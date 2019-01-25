import { Component, Prop, Element, Watch } from "@stencil/core";

@Component({
  tag: "gm-ui-breadcrumbs",
  styleUrls: ["../../style/styleVariables.css", "./breadcrumbs.css"],
  shadow: true
})
export class Breadcrumbs {
  @Prop({ mutable: true, reflectToAttr: true }) collapsed: boolean = false;
  @Prop({ mutable: true, reflectToAttr: true }) maxItems: string = "10";
  @Prop({ mutable: true, reflectToAttr: true }) crumbs = [];

  @Element() el: HTMLElement;

  componentDidLoad() {
    this.crumbs = Array.from(this.el.children);
    if (this.crumbs.length >= +this.maxItems) {
      this.collapsed = true;
    }
  }

  componentDidUpdate() {
    const ellipsis = document.createElement("span");
    ellipsis.id = "ellipsis";
    ellipsis.textContent = "...";

    this.el.insertBefore(ellipsis, this.el.querySelector("a").lastChild);
  }

  @Watch("maxItems")
  maxItemsChanged(newValue: string) {
    console.log("maxItems changed");
    if (this.el.children.length >= +newValue) {
      this.collapsed = true;
    }
  }

  render() {
    return (
      <div id="container">
        <slot />
      </div>
    );
  }
}

// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import BreadcrumbItem from "./BreadcrumbItem";
// import { FONT_STACK_BASE, FONT_SIZE_SM } from "style/styleVariables";

// export const BreadcrumbsContainer = styled.ol`
//   font-family: ${FONT_STACK_BASE};
//   font-size: ${FONT_SIZE_SM};
//   flex: 1 1 auto;
//   display: flex;
//   margin: 0;
//   padding: 0;
//   flex-direction: row;
//   height: inherit;
//   align-items: stretch;
//   flex-wrap: wrap;
// `;

// class Breadcrumbs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { collapsed: false };
//   }

//   componentDidMount() {
//     this.updateView(this.props);
//   }

//   UNSAFE_componentWillReceiveProps(nextProps) {
//     this.updateView(nextProps);
//   }

//   updateView = props => {
//     const { crumbs, maxItems, collapse } = props;
//     const childrenLen = crumbs.length;
//     if (collapse || maxItems < childrenLen) {
//       this.collapse();
//     } else {
//       this.expand();
//     }
//   };

//   collapse = () => this.setState({ collapsed: true });

//   expand = () => this.setState({ collapsed: false });

//   renderCollapsed = crumbs => {
//     const elipsisItem = (
//       <BreadcrumbItem key={1} item={"..."} expand={this.expand} />
//     );
//     const lastIndex = crumbs.length - 1;
//     const collapsedArr = [
//       <BreadcrumbItem key={0} item={crumbs[0]} />,
//       elipsisItem,
//       <BreadcrumbItem key={lastIndex} item={crumbs[lastIndex]} />
//     ];
//     return collapsedArr;
//   };

//   renderExpanded = crumbs => {
//     return crumbs.map((item, i) => {
//       return (
//         <BreadcrumbItem
//           key={i}
//           item={item}
//           hideDelimiter={crumbs.length === 1}
//         />
//       );
//     });
//   };

//   render() {
//     const { crumbs, ...props } = this.props;
//     const { collapsed } = this.state;
//     return (
//       <BreadcrumbsContainer {...props}>
//         {collapsed && crumbs.length > 2
//           ? this.renderCollapsed(crumbs)
//           : this.renderExpanded(crumbs)}
//       </BreadcrumbsContainer>
//     );
//   }
// }

// export default Breadcrumbs;

// Breadcrumbs.defaultProps = {
//   maxItems: 10,
//   collapse: false
// };

// Breadcrumbs.propTypes = {
//   collapse: PropTypes.bool,
//   crumbs: PropTypes.array.isRequired,
//   maxItems: PropTypes.number
// };
