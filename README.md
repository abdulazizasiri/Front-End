# Front-End - Booststrap 4


## Layout


## Navigation

### navs

Navigation is done by using the html element <code> nav </code>.

Add a class of nav to the nav element. There are some optional classes on nav elements such as

- nav-pills : Which makes navs look like buttons.

- nav-fill: all nav-items will have equal length

- nav-justified: all nav-items will have equal spacing.  

- flex-column: this is  a great class for mobile experience, but the problem is it will have on all devices the mobile experience. so, you need to use <code> flex-ALN-row </code>  where ALN can be <code> center </code>,  <code> end </code> or <code> start </code>.

- justified-content-ALN, this move navs horizontally like in layout where you can move rows.


Moreover, children items inside <code> nav </code> element are the anchor tags.

<a>. These element must have the two classes <code> nav-item </code> and <code> nav-link </code>.


En example,


```html

<div class="container">
  <div class="row  ">
    <section class="col">
      <nav class="nav nav-pills  flex-column flex-sm-row nav-justified ">
        <a  class="nav-link nav-item bg-danger text-white"  href="#"> Home </a>
        <a  class="nav-link nav-item"  href="#"> Mission </a>
        <a  class="nav-link nav-item"  href="#"> Services </a>
        <a  class="nav-link nav-item"  href="#"> Staff </a>
        <a  class="nav-link nav-item"  href="#"> Testimonials </a>
      </nav>
    </section>
  </div>
  </div>


```

### navbars


Navbars is related to the nav component.

The navbar class goes into the main container. navbars by default are stackable component, so we need to add <code> navbar-expand(-BP)</code> class. Bp are the famous breakpoint suhc as sm, md, and xl etc. You can also add navbars colors, so we have <code> navbar-light </code> or <code> navbar-dark </code>



Inside, the main navbar class, we add <code> navbar-nav </code> class as well. Note, inside this we add another container, ao inside this container, we can add the normal components <code>nav-item</code> and <code>nav-link</code>


navbars are by default stackable items, so you can use  <code> navbar-expand </code to make them align horizontally than stackable.


Example for the above,


```html

<nav class="navbar bg-dark  navbar-dark navbar-expand-sm">
  <div class="navbar-nav ">
    <a  class="nav-link nav-item"  href="#"> Home </a>
    <a  class="nav-link nav-item"  href="#"> Mission </a>
    <a  class="nav-link nav-item"  href="#"> Services </a>
    <a  class="nav-link nav-item"  href="#"> Staff </a>
    <a  class="nav-link nav-item"  href="#"> Testimonials </a>
  </div>

</nav>

```


The navs look god if we group them inside a container.


Example with a container


```html

        <nav class="navbar bg-dark  navbar-dark navbar-expand-sm">
          <div class="container"> <!-- Container will make it look better -->

            <div class="navbar-nav ">
              <a  class="nav-link nav-item"  href="#"> Home </a>
              <a  class="nav-link nav-item"  href="#"> Mission </a>
              <a  class="nav-link nav-item"  href="#"> Services </a>
              <a  class="nav-link nav-item"  href="#"> Staff </a>
              <a  class="nav-link nav-item"  href="#"> Testimonials </a>
            </div>
          </div>


        </nav>

```


###  Navbar brand & Text.


These are used with text or logos. We can add to the navbar component,

- navbar-brand

- Link and Headline

- Using Images

- navbar-text


You can add clickable images, text or anything, but that requires wrapping the element around a <a> tag.


```html


        <nav class="navbar bg-dark  navbar-dark navbar-expand-sm">
          <div class="container">
            <div class="navbar-brand">Wisodm Pet</div>
            <div class="navbar-nav ">
              <a  class="nav-link nav-item active"  href="#"> Home </a>
              <a  class="nav-link nav-item disabled "  href="#"> Mission </a>
              <a  class="nav-link nav-item"  href="#"> Services </a>
              <a  class="nav-link nav-item"  href="#"> Staff </a>
              <a  class="nav-link nav-item"  href="#"> Testimonials </a>
            </div>
          </div>


        </nav>


```


### Adding a dropdown


Dropdown navs are quite complicated to make. They are used in  a menus


- Dropdown setups. dropdown requires a container which is a class of <code> dropdown</code>. There is a <code> dropdown-toggle</code> class.


- In order to activate dropdown, we use <code>data-toggle="dropdown"</code>

- After that, you have to build the menu itself with <code> dropdown-menu</code> each of the dropdown-menu is a <code> dropdown-item</code>

- Add and id and aria attributes.


An example,

```html

        <nav class="navbar bg-dark  navbar-dark navbar-expand-sm">
          <div class="container">
            <div class="navbar-nav ml-auto">
              <div class="dropdown">
                <a  class="nav-link nav-item dropdown-toggle"
                data-toggle="dropdown" id="homeDropdown"
                aria-haspopup="true" aria-expanded="false"
                href="#"> Home </a>

                <div class="dropdown-menu" aria-labelledby="homeDropdown">


                  <a  class="dropdown-item"  href="#"> Mission </a>
                  <a  class="dropdown-item"  href="#"> Services </a>
                  <a  class="dropdown-item"  href="#"> Staff </a>
                  <a  class="dropdown-item"  href="#"> Testimonials </a>
                </div>
              </div>

            </div>
          </div>


        </nav>
```


Notice, the process is lengthy to create a dropdown menu in bootstrap, but it adds a great navigation to a website.




### Form classes.


- Use form-inline classes.

- use form-control


### positioning navbar


navbars can be positited using <code> fixed-POS </code> where POS can be bottom, top, sticky and others.



### Collapsable content.  hamburger icon.


This components add a great to a website navigation.



- We need a couple of classes such as <code>collapse</code> and <code>navbar-collabe</code> and an id.

- For toggler classes we used

- navbar-toggler

- Other Properties

- navbar-toggler-icon.



### Forms


Forms are an important part of a great interface. There are certain components to be used when dealing with bootstrap's forms such as <code> form-inline </code> and more.


### Basic Forms.
First of all you have to group form elements. We use for that <code>form-group</code> and <code>form-text</code>


Form control components such as,

- <code>form-control</code> It is for inputs, selects, and text areas.

- <code>form-control-label</code>

- <code>form-control-file</code> for file input



Form group adds a nice spacing  between elements inside a form.


class="form-control" puts an element in one line and the label in another.
it goes to certain elements such as <code>input</code> and <code>textarea</code>


An example of a simple form in bootstrap 4.



```html

<form>
  <fieldset class="form-group">
    <legend>Owner Info</legend>
    <div class="form-group">
      <label for="Owner Name"> Owner Name </label>
      <input class="form-control"type="text" id="ownername" placeholder="Your name">
    </div>

    <div class="form-group">
      <label class="form-control-label" for="email address"> Email Address </label>
      <input class="form-control" type="email" id="email" placeholder="Your Email">
      <small id="emailHelp"> We'll share your email > </small>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <legend>Pet Info </legend>
    <div class="form-group">
      <label class="form-control-label" for="Pet Name"> Pet Name </label>
      <input class="form-control" type="text" id="petername" placeholder="Your Pet name">
    </div>
    <div class="form-group">
      <label for="Pettype"> Pet Type </label>
      <select id="pettype">

        <option> Choose </option>
            <option vlaue="cat"> Cat </option>
            <option vlaue="dog"> Dog </option>
            <option vlaue="other"> Other </option>

    </div>

  </fieldset>
  <button type="submit" class="form-control btn bg-success"> Submit </button>
</form>


```
