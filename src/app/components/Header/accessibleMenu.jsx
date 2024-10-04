import React from "react";
import PropTypes from "prop-types";
import { convertDuration } from "../../helpers";

class AccessibleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
    };

    this.blurTimeout = "";
  }

  onMouseDown = (event) => {
    event.persist();
    event.preventDefault();
    return false;
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (
      this.props !== newProps &&
      this.props.opened !== newProps.opened &&
      newProps.opened === true
    ) {
      console.log("magic")
      setTimeout(() => {
        this.activeLink.focus();
      }, 100);
    }
  }

  onClick = (e, id) => {
    const { onItemClick } = this.props;
    this.props.closeDropDown(false);
    onItemClick(id);
  };

  onFocus = () => {
    clearTimeout(this.blurTimeout);
  };

  onBlur = () => {
    this.blurTimeout = setTimeout(() => {
      if (this.props.opened) {
        this.props.closeDropDown(false);
      }
    }, 100);
  };

  onKeyDown = (e, itemIndex) => {
    switch (e.which) {
      case 9:
      case 27:
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.closeDropDown(false);
        break;
      case 35:
        e.preventDefault();
        this.lastItem(itemIndex);
        break;
      case 36:
        e.preventDefault();
        this.firstItem(itemIndex);
        break;
      case 37:
      case 38:
        e.preventDefault();
        this.previousItem(itemIndex);
        break;
      case 39:
      case 40:
        e.preventDefault();
        this.nextItem(itemIndex);
        break;
      default:
        break;
    }
  };

  onChangeItem = (itemIndex) => {
    this.setState(
      {
        currentItem: itemIndex,
      },
      () => {
        this.activeLink.focus();
      }
    );
  };

  selectItem(itemIndex) {
    const { currentItem } = this.state;

    if (currentItem !== itemIndex) {
      this.onChangeItem(itemIndex);
    }
  }

  previousItem(index) {
    const {menu} = this.props;
    const {hidden} = index === 0 ? menu[this.props.menu.length-1] : menu[index-1]
    if (index > 0) {
      if(hidden)this.selectItem(index - 2)
      else this.selectItem(index - 1);
    }
    else if (index === 0){
      if(hidden) this.selectItem(this.props.menu.length - 2);
      else this.selectItem(this.props.menu.length-1)
    }
  }
  
  nextItem(index) {
    const {menu} = this.props;
    const {hidden} = index === this.props.menu.length - 1 ? menu[0] : menu[index+1]
    if (index < this.props.menu.length - 1) {
      if(hidden && index+1 === this.props.menu.length - 1)this.selectItem(0)
      else if(hidden)this.selectItem(index + 2)
      else this.selectItem(index + 1);
    }
    else if (index === this.props.menu.length - 1) this.selectItem(0);
  }

  firstItem() {
    this.selectItem(0);
  }

  lastItem() {
    this.selectItem(this.props.menu.length - 1);
  }

  getContvertedTime = (currentTime) => {
    const duration = convertDuration(currentTime);
    let str = "";

    if (Number(duration.split(":")[0]) < 10) {
      str = `${duration.split(":")[0]} minute ${
        duration.split(":")[1]
      } seconds`;
    } else {
      str = `${duration.split(":")[0]} minutes ${
        duration.split(":")[1]
      } seconds`;
    }

    return str;
  };
  render() {
    const { currentItem } = this.state;
    const { menu, opened, selectedItem } = this.props;

    return (
      <div style={{ display: opened ? "block" : "none" }}>
        <ul className="menu-shown " role={opened ? "menu" : "none"}>
          {menu.map((item, index) => {
            const itemIndex = index === currentItem ? 0 : -1;
            const check = selectedItem == item.id;

            const getDuration=item.duration ? this.getContvertedTime(item.durationEnd - item.durationStart) : this.getContvertedTime(item.endTime - item.startTime)
            const itemSelectedLabel = check
              ? `${item.label || item.name} Duration ${getDuration} selected`
              : `${item.label || item.name} Duration ${getDuration}`;

            const hideMenuItem = item.hidden ? "hide" : "";
            const iconClass = `icon ${check ? "show" : "hide"}`;
            const itemClass = `item-name ${check ? "selected" : ""}`;

            return (
              <li key={index} role="none" className={`item ${hideMenuItem}`}>
                <a
                  href="#"
                  role="menuitem"
                  // onBlur={this.onBlur}
                  //  onFocus={this.onFocus}
                  title={itemSelectedLabel}
                  onClick={(e) => this.onClick(e, item)}
                  onKeyDown={(e) => this.onKeyDown(e, index)}
                  tabIndex={index === currentItem ? null : itemIndex}
                  ref={(link) => {
                    if (index === currentItem) this.activeLink = link;
                  }}
                >
                  <span className={iconClass} aria-hidden="true"></span>
                  <div className="item-text" aria-hidden="true">
                    <span
                      className={itemClass}
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></span>
                    <span className="item-duration">
                      {item.duration ? convertDuration(item.durationEnd - item.durationStart) : convertDuration(item.endTime - item.startTime)}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

AccessibleMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  opened: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
  closeDropDown: PropTypes.func.isRequired,
};

export default AccessibleMenu;
