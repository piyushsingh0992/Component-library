import React from "react";
import "./documentation.css";
// import "./componentLibrary.css";
import SideNav from "../components/sideNav/SideNav.js";
import Component from "../components/component/Component.js";

//importing image
import product from "./images/dogFood.jpg";
import banner1 from "./images/b1.jpg";
import banner2 from "./images/b2.png";
import banner3 from "./images/b3.jpg";

// component library elements
import ActionButton from "./components/actionButton/ActionButton.js";
import Alert from "./components/alert/Alert.js";
import Avatar from "./components/avatar/Avatar.js";
import Badge from "./components/badge/Badge.js";
import Button from "./components/button/Button.js";
import Card from "./components/card/Card.js";
import Chip from "./components/chip/Chip.js";
import Dropdown from "./components/dropdown/DropDown.js";
import Loader from "./components/loader/Loader.js";
import Modal from "./components/modal/Modal.js";
import Rating from "./components/rating/Rating.js";
import Slider from "./components/slider/Slider.js";
import SlideShow from "./components/slideShow/SlideShow.js";
import SnackBar from "./components/snackBar/SnackBar.js";
import Stepper from "./components/stepper/Stepper.js";
import ToggleButton from "./components/toggleButton/ToggleButton.js";
import TextField from "./components/textField/TextField.js";
const Documentation = () => {
  return (
    <div className="documentation">
      <SideNav />
      <div className="component-documentation">
        <Component
          id="gettingstarted"
          name="Getting Started"
          desc="Copy this HTML tag in your header to start using the styling below "
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fmoonlight-1997.netlify.app%252FcomponentLibrary.css%2522%253E",
            height: 120,
            width: 810,
          }}
        />

        <Component
          id="navbar"
          name="Navigation bar"
          sandBox="https://codesandbox.io/s/navigation-bar-tmr7t?file=/index.html"
          desc="A navigation bar is a section of a graphical user interface
            intended to aid visitors in accessing information"
          iframe="https://navigation-bar-1997.netlify.app/"
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522navbar%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fdog.svg%2522%2520class%253D%2522navbar-brand-icon%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-search%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fsearch.svg%2522%2520class%253D%2522navbar-search-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520placeholder%253D%2522Search%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-right%2520navbar-hide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-link-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522navbar-link%2522%253EItem%25201%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522navbar-link%2522%253EItem%25202%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-logout-link-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522navbar-link%2522%253E%253Cp%253ELogin%253C%252Fp%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            height: 494,
            width: 590,
          }}
        />

        <Component
          id="actionButton"
          name="Action Button"
          sandBox="https://codesandbox.io/s/action-button-7o4b0"
          desc="Action  buttons are the buttons you use in your
            website and on your landing pages to guide users towards your goal
            conversion. It's the part of the landing page that the user needs
            to click in order to take the action you want them to take."
          preview={[
            <ActionButton type="add" position="preview" />,
            <ActionButton type="edit" position="preview" />,
            <ActionButton type="navigate" position="preview" />,
            <ActionButton type="" position="preview" />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522floating-button%2520top%2520left%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fadd.svg%2522%2520class%253D%2522floating-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522floating-button%2520top%2520right%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fedit.svg%2522%2520class%253D%2522floating-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522floating-button%2520bottom%2520left%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fnavigate.svg%2522%2520class%253D%2522floating-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522floating-button%2520bottom%2520right%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fnavigate.svg%2522%2520class%253D%2522floating-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A",
            height: 420,
            width: 504,
          }}
        />

        <Component
          id="alert"
          name="Alert"
          sandBox="https://codesandbox.io/s/alert-73n68?file=/index.html:192-469"
          desc="Alerts are enabled by the user and are triggered by driving events
            like speeding, harsh braking, and entering/exiting a geofence."
          preview={[
            <Alert type="error" btnText="Show Error" position="top-right" />,
            <Alert type="success" btnText="Show Success" position="top-left" />,
            <Alert
              type="warning"
              btnText="Show Warning"
              position="bottom-right"
            />,
            <Alert type="info" btnText="show info" position="bottom-left" />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%253Cbutton%2520class%253D%2522btn%2520btn-primary%2520alert-btn%2522%253EShow%2520Alert%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520error%2520alert-bottom-right%2520hide-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%253D%2522alert-icon%2522%2520src%253D%2522.%252Fimages%252Fwarning.svg%2522%2520alt%253D%2522alert%2520tav%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EAlert%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253EMessage%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            width: 607,
            height: 270,
          }}
        />

        <Component
          id="avatar"
          name="Avatar"
          sandBox="https://codesandbox.io/s/avatar-k8b3f"
          desc="In computing, an avatar (also known as a profile picture or
              userpic) is a graphical representation of a user or the user's
              character or persona. It may take either a two-dimensional form as
              an icon in Internet forums and other online communities or a
              three-dimensional form, as in games or virtual worlds."
          preview={[
            <Avatar size="small" />,
            <Avatar size="large" />,
            <Avatar size="larger" />,
            <Avatar name="piyush" size="small" />,
            <Avatar name="piyush" size="large" />,
            <Avatar name="piyush" size="larger" />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%2520%2520%253Cdiv%2520class%253D%2522avatar%2520small%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522small%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520large%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522large%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520larger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522larger%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520small%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520large%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520larger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 548,
            height: 590,
          }}
        />

        <Component
          id="badge"
          name="Badge"
          sandBox="https://codesandbox.io/s/badges-nj1q3?file=/index.html"
          desc="badges are small images in some World
            Wide Web pages which are typically used to promote programs that
            were used to create or host the site."
          preview={[
            <Badge size="small">
              <Avatar size="small" />
            </Badge>,
            <Badge size="large" status="offline">
              <Avatar size="large" />
            </Badge>,
            <Badge size="larger" item={22}>
              <Avatar size="larger" />
            </Badge>,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%2520%2520%253Cspan%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2520badge-online%2520badge-item-larger%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520larger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2520badge-offline%2520badge-item-larger%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520larger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2520badge-item%2520badge-item-larger%2522%253E%253Cp%253E1%253C%252Fp%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520larger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EP%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E",
            width: 548,
            height: 530,
          }}
        />

        <Component
          id="button"
          name="Button"
          sandBox="https://codesandbox.io/s/button-r5j2z?file=/index.html"
          desc="A button is a fundamental UI element that will heavily affect your interaction design. Buttons have the power to compel users to convert, to carry out an action. Buttons are a middleman between the user and the product, and are charged with keeping the conversation between person and machine going"
          preview={[
            <Button text="Primary" type="primary" />,
            <Button text="Secondary" type="secondary" />,
            <Button text="Warning" type="warning" />,
            <Button text="Success" type="success" />,
          ]}
          success
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-warning%2522%253EWarning%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-success%2522%253ESuccess%253C%252Fbutton%253E",
            width: 466,
            height: 170,
          }}
        />

        <Component
          id="card"
          name="Card"
          sandBox="https://codesandbox.io/s/card-370ku?file=/index.html:188-301"
          desc="Product card is widely used in ecommerce websites and
            applications.Product cards aim to capture the interest of viewers
            most especially that being catchy in a shopping platform attracts
            curious eyes and usually a possible sale."
          preview={[
            <Card
              productImage={product}
              productName="Dog food"
              price={1000}
              off={10}
              productDes="dog eat this food"
              addToCart={() => {
                alert("added to cart");
              }}
              addToWishList={() => {
                alert("added to Wish list");
              }}
              removeFromWishList={() => {
                alert("removed from wish list");
              }}
              rating={2}
              outOfStock={true}
            />,
            <Card
              productImage={product}
              productName="Dog food"
              price={1000}
              off={10}
              productDes="dog eat this food"
              addToCart={() => {
                alert("added to cart");
              }}
              addToWishList={() => {
                alert("added to Wish list");
              }}
              removeFromWishList={() => {
                alert("removed from wish list");
              }}
              rating={4}
            />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%2520%2520%253Cdiv%2520class%253D%2522card%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522out-of-stock%2522%253EOut%2520of%2520Stock%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-img-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522.%252Fimages%252Fheart1.svg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card-add-to-wishlist%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Add%2520toCart%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252FdogFood.jpg%2522%2520class%253D%2522card-img%2522%2520alt%253D%2522product%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-description-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-heading%2522%253EDog%2520food%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-description%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520food%2520for%2520your%2520Dog%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-price-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-new-price%2522%253ERs%2520500%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-old-price%2522%253ERs%25201000%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-percentage-off%2522%253E50%2525%2520off%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Crating%253E%253C%252Frating%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EAdd%2520to%2520Cart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 577,
            height: 630,
          }}
        />

        <Component
          id="chip"
          name="Chip"
          sandBox="https://codesandbox.io/s/card-370ku?file=/index.html:188-301"
          desc="Chips are compact elements that represent an input, attribute, or action"
          preview={[
            <Chip type="primary" text="primary" />,
            <Chip type="secondary" text="secondary" />,
            <Chip type="warning" text="warning" />,
            <Chip type="success" text="success" />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=12px&lh=167%25&si=false&es=2x&wm=false&code=%2509%253Cdiv%2520class%253D%2522chip%2520chip-primary%2522%253E%250A%2520%2520%2520%2520%2520%2520Primary%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fprimary-cancel.svg%2522%2520class%253D%2522chip-cancel%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522chip%2520chip-secondary%2522%253E%250A%2520%2520%2520%2520%2520%2520Secondary%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fsecondary-cancel.svg%2522%2520class%253D%2522chip-cancel%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522chip%2520chip-warning%2522%253E%250A%2520%2520%2520%2520%2520%2520warning%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fwarning-cancel.svg%2522%2520class%253D%2522chip-cancel%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522chip%2520chip-success%2522%253E%250A%2520%2520%2520%2520%2520%2520success%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fsuccess-cancel.svg%2522%2520class%253D%2522chip-cancel%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 548,
            height: 530,
          }}
        />

        <Component
          id="dropdown"
          name="Dropdown Button"
          sandBox="https://codesandbox.io/s/dropdown-u514d?file=/index.html"
          desc="A drop-down menu (sometimes called pull-down menu or list) is a
            graphic control element designed to help visitors find specific
            pages or features on your website."
          preview={[
            <Dropdown
              item={[{ text: "item1" }, { text: "item2" }, { text: "item3" }]}
            />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-trigger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Emenu%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252FdownArrow.svg%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-items-container%2520dropdown-hide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-1%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-2%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522dropdown-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-3%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520",
            width: 555,
            height: 510,
          }}
        />

        <Component
          id="footer"
          name="Footer"
          sandBox="https://codesandbox.io/s/footer-soelp?file=/index.html:193-857"
          desc="A website's footer is an area located at the bottom of every page
            on a website, below the main body content."
          iframe="https://footer-1997.netlify.app/"
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522footer%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253EDeveloped%2520by%2520%253Ca%2520class%253D%2522footer-primary-link%2522%253EPiyush%2520Singh%253C%252Fa%253E%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522footer-icons-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522footer-icon-container%2522%2520href%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Finstagram.svg%2522%2520class%253D%2522footer-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522footer-icon-container%2522%2520href%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fgithub.svg%2522%2520class%253D%2522footer-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522footer-icon-container%2522%2520href%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Flinkedln.svg%2522%2520class%253D%2522footer-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522footer-icon-container%2522%2520href%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Ftwitter.svg%2522%2520class%253D%2522footer-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            width: 667,
            height: 570,
          }}
        />

        <Component
          id="loader"
          name="Loader"
          sandBox="https://codesandbox.io/s/loader-jzb61?file=/index.html"
          desc="Loaders are what you see on the screen while the rest of the
            page's content is still loading."
          preview={[
            <Loader />,
            <Loader size={2} />,
            <Loader size={3} />,
            <Loader size={4} />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522loader%2522%253E%253C%252Fdiv%253E",
            width: 280,
            height: 110,
          }}
        />

        <Component
          id="modal"
          name="Modal"
          sandBox="https://codesandbox.io/s/modal-qxlp8?file=/index.html"
          desc="In user interface design for computer applications, a modal window
            is a graphical control element subordinate to an application's
            main window. A modal window creates a mode that disables the main
            window but keeps it visible, with the modal window as a child
            window in front of it."
          preview={[
            <Modal
              heading="Do you want to see Projects I made using this component library"
              btn1={{ text: "Yes" }}
              btn2={{ text: "no", type: "warning" }}
            />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522modal-open-trigger%2520btn%2520btn-primary%2522%253EOpen%2520modal%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-container%2520modal-show%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fclose.svg%2522%2520class%253D%2522modal-close-trigger%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-heading%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EHeading%2520%253F%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Econtent%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            width: 641,
            height: 510,
          }}
        />

        <Component
          id="rating"
          name="Rating"
          sandBox="https://codesandbox.io/s/rating-bcolt?file=/index.html"
          desc="Point-based ratings are another type of rating system that can be used to evaluate products on your site.."
          preview={[
            <Rating rating={5} />,
            <Rating rating={2} />,
            <Rating rating={4} />,
          ]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522rating%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522fa%2520fa-star%2520checked%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522fa%2520fa-star%2520checked%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522fa%2520fa-star%2520%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522fa%2520fa-star%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522fa%2520fa-star%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520",
            width: 434,
            height: 350,
          }}
        />

        <Component
          id="sidenav1"
          name="Side Navigation Bar Type 1"
          sandBox="https://codesandbox.io/s/side-navigation-bar-1-ruw7b?file=/index.html"
          desc="A navigation bar is a section of a graphical user interface
            intended to aid visitors in accessing information"
          iframe="https://side-nav-1.netlify.app/"
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%250A%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav%2520transition%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fmenu.svg%2522%2520class%253D%2522sidenav-menu-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-item-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2509%253Cimg%2520src%253D%2522.%252Fimages%252Fdog.svg%2522%2520class%253D%2522sidenav-brand-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-route-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fdog.svg%2522%2520class%253D%2522sidenav-item-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-1%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fdog.svg%2522%2520class%253D%2522sidenav-item-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-1%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eitem-1%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 624,
            height: 620,
          }}
        />

        <Component
          id="sidenav2"
          name="Side Navigation Bar Type 2"
          sandBox="https://codesandbox.io/s/side-navigation-bar-2-5i3mi?file=/index.html"
          desc="A navigation bar is a section of a graphical user interface
            intended to aid visitors in accessing information"
          iframe="https://side-nav-2.netlify.app/"
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522sidenav%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-brand-icon-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fdog.svg%2522%2520class%253D%2522sidenav-brand-icon%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-search-bar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fsearch.svg%2522%2520class%253D%2522sidenav-search-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522sidenav-search-input%2522%2520placeholder%253D%2522Search%2520here%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522side-mobile-view-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-routes%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-route%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%253E%2520Home%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-route%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%253EGithub%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-dropdown-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-dropdown-burger-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fmenu.svg%2522%2520class%253D%2522sidenav-dropdown-burger-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sidenav-options-container%2520sidenav-options-container-hide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522sidenav-option%2522%2520href%253D%2522%2522%253Eitem%25201%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522sidenav-option%2520sidenav-option-color%2522%2520href%253D%2522%2522%253Eitem%25202%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522sidenav-option%2522%2520href%253D%2522%2522%253Eitem%25203%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522sidenav-option%2520sidenav-option-color%2522%2520href%253D%2522%2522%253Eitem%25204%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 728,
            height: 800,
          }}
        />

        <Component
          id="slider"
          name="Slider"
          sandBox="https://codesandbox.io/s/slider-1nhvh?file=/index.html:232-373"
          desc="Range slider is a very intuitive user interface with one or two handles to allows user to choose a value within a limited range."
          preview={[<Slider />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2509%253Cdiv%2520className%253D%2522slide-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520class%253D%2522slider%2522%2520id%253D%2522myRange%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 676,
            height: 145,
          }}
        />

        <Component
          id="slideShow"
          name="Slide Show"
          sandBox="https://codesandbox.io/s/slide-show-1jbw0?file=/index.html:159-416"
          desc="Range slider is a very intuitive user interface with one or two handles to allows user to choose a value within a limited range."
          preview={[<SlideShow bannerArray={[banner1, banner2, banner3]} />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2509%253Cdiv%2520className%253D%2522slide-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520class%253D%2522slider%2522%2520id%253D%2522myRange%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E",
            width: 676,
            height: 155,
          }}
        />
        <Component
          id="snackbar"
          name="Snackbar"
          sandBox="https://codesandbox.io/s/snack-bar-8sk50?file=/index.html"
          desc="Android Snackbar is light-weight widget and they are used to show messages in the bottom of the application with swiping enabled. "
          preview={[<SnackBar text="Snack bar" />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2509%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522snackbox-trigger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Open%2520snackBar%250A%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522snackbar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ESnack%2520bar%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fclose.svg%2522%2520class%253D%2522snackbar-close%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            width: 581,
            height: 284,
          }}
        />

        <Component
          id="stepper"
          name="Stepper"
          sandBox="https://codesandbox.io/s/snack-bar-8sk50?file=/index.html"
          desc="Android Snackbar is light-weight widget and they are used to show messages in the bottom of the application with swiping enabled. "
          preview={[<Stepper taskArray={[`task1`, `task2`, `task3`]} />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2509%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522snackbox-trigger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Open%2520snackBar%250A%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522snackbar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ESnack%2520bar%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fimages%252Fclose.svg%2522%2520class%253D%2522snackbar-close%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A",
            width: 581,
            height: 284,
          }}
        />

        <Component
          id="toggleButton"
          name="Toggle Button"
          sandBox="https://codesandbox.io/s/toggle-button-oqnow?file=/src/App.jsx"
          desc="A toggle switch is a digital on/off switch. Toggle switches are best used for changing the state of system functionalities and preferences."
          preview={[<ToggleButton />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2509%253Clabel%2520class%253D%2522switch%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522checkbox%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522toggleButton%2520round%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Flabel%253E",
            width: 426,
            height: 199,
          }}
        />

        <Component
          id="textField"
          name="TextField"
          sandBox="https://codesandbox.io/s/text-field-u2fce?file=/src/index.js"
          desc="A toggle switch is a digital on/off switch. Toggle switches are best used for changing the state of system functionalities and preferences."
          preview={[<TextField label="Name" />]}
          code={{
            src:
              "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=153%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522textField%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cinput%2520required%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%253EName%253C%252Flabel%253E",
            width: 310,
            height: 180,
          }}
        />
      </div>
    </div>
  );
};

export default Documentation;
