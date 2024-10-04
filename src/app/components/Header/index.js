import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import AccessibleMenu from "./accessibleMenu.jsx";
import PDFDownloader from "./PDFDownloader.jsx";
import { convertDuration } from "../../helpers";

const Header = (props) => {
  const {
    tocOpened,
    toggleToc,
    ns,
    tocData,
    selectedToc,
    setToc,
    altText,
    overlay,
    toggleOverlay,
    updateLiveMessage,
  } = props;

  const dropdownButtonRef = useRef(null);
  const [selectedTocItem, setSelectedTocItem] = useState({});
  const [_tocOpened, _setTocOpened] = useState(props.tocOpened);
  let blurTimeout = "";
  useEffect(() => {
    const selectedItem = tocData.filter((e) => e.id == props.selectedToc)[0];
    setSelectedTocItem(selectedItem);
  }, []);


  const getContvertedTime = (currentTime) => {
    const duration = convertDuration(currentTime);
    let str = "";

    if (Number(duration.split(":")[0]) < 10) {
      str = `${duration.split(":")[0]} minute ${duration.split(":")[1]
        } seconds`;
    } else {
      str = `${duration.split(":")[0]} minutes ${duration.split(":")[1]
        } seconds`;
    }

    return str;
  };
  useEffect(() => {
    if (props.tocOpened !== _tocOpened) {
      if (!props.tocOpened) {
        setTimeout(() => {
          dropdownButtonRef.current.focus();
        }, 100);
      }
      _setTocOpened(props.tocOpened);
    }
  }, [props.tocOpened]);


  useEffect(() => {
    if (!overlay) {
      setTimeout(() => {
        dropdownButtonRef.current.focus();
      }, 100);
    }
  }, [overlay])

  useEffect(() => {
    const selectedItem = tocData.filter((e) => e.id == props.selectedToc)[0];
    const hiddenItemInd = tocData.findIndex((e) => e.id == props.selectedToc)
    if (selectedItem.hidden) {
      setSelectedTocItem(tocData[hiddenItemInd - 1]);
    } else {
      setSelectedTocItem(selectedItem);
    }
  }, [props.selectedToc]);

  const _setToc = (item) => {
    setTimeout(() => {
      let message = "";
      const getDuration = item.duration ? getContvertedTime(item.durationEnd - item.durationStart) : getContvertedTime(item.endTime - item.startTime)
      if (item.label && item.label !== "") {
        message = item.label + " Duration " + getDuration + " selected";
      } else {
        message = item.name + " Duration " + getDuration + " selected";
      }

      updateLiveMessage(message);
    }, 100);
    setToc(item.id);
  };
  const onFocus = () => {
    clearTimeout(blurTimeout);
  };
  const onBlur = () => {
    blurTimeout = setTimeout(() => {
      if (tocOpened) {
        toggleToc(false);
      }
    }, 100);
  };

  const infoButtonLabel = overlay ? "Hide Info" : "Show Info";
  const tocContainerClass = `toc-container ${overlay ? "overlay" : ""}`;
  const pdfInfoSectionClass = `pdf-info-section ${overlay ? "overlay" : ""}`;

  return (
    <header aria-hidden={overlay} className={`${ns}-header`} role="banner">
      {props.children}
      <div className="logo" role="img" aria-label={altText.logo}></div>
      <div className={tocContainerClass}>
        <div className="tocfield">
          <button
            onClick={() => toggleToc(true)}
            id="toc-open-button"
            aria-haspopup="listbox"
            aria-hidden={tocOpened}
            ref={dropdownButtonRef}
            className="toc-dropdown"
            aria-expanded={tocOpened}
            tabIndex={tocOpened ? "-1" : null}
            aria-labelledby="toc toc-open-button"
            title={selectedTocItem.label || selectedTocItem.name}
            disabled={overlay}
          >
            <div className="left-section" aria-hidden="true">
              <span className="list-icon"></span>
              <span
                aria-hidden={true}
                id="toc-button-text"
                className={"toctext"}
                dangerouslySetInnerHTML={{ __html: selectedTocItem.name }}
              ></span>
              <span
                className={"sr-only"}

                dangerouslySetInnerHTML={{ __html: selectedTocItem.label || selectedTocItem.name }}
              ></span>
            </div>
            <span className="dropdown-icon"></span>
          </button>

          <div className={`toc-list ${tocOpened ? "open" : "close"}`}>
            <div className="toc-list-header" onClick={() => toggleToc(false)}>
              <span className="header-icon-left"></span>
              <span className="header-text" id="toc">
                Table of Contents
              </span>
              <span className="header-right">Duration</span>
            </div>
            <div className={"tocdetail"} onBlur={() => onBlur()} onFocus={() => onFocus()}>
              <AccessibleMenu
                menu={tocData}
                opened={tocOpened}
                onItemClick={_setToc}
                closeDropDown={toggleToc}
                selectedItem={selectedToc}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={pdfInfoSectionClass}>
        {/* <PDFDownloader
          classes="pdf-btn"
          label="Download PDF"
          pdfDocument={props.pdfDocument}
          pdfTitle={props.pdfDocumentTitle}
          disabled={overlay || props.disableDownloadPDF}
        /> */}
        <button
          type="button"
          disabled={overlay}
          title={infoButtonLabel}
          onClick={toggleOverlay}
          //aria-label={infoButtonLabel}
          className={`info-btn ${overlay ? "active" : ""}`}
        >
          <span className="info-btn-text">{infoButtonLabel}</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  tocOpened: PropTypes.bool,
  tocData: PropTypes.array,
  selectedToc: PropTypes.string,
  toggleToc: PropTypes.func,
  setToc: PropTypes.func,
};

export default Header;
