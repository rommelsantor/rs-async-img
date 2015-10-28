# rs-async-img

This is a useful directive if you have an image loaded via controller that is blocking other controller requests from completing. It effectively just separates the image loading work using a promise.

I needed this on a page where I have a parent controller (ContainerController) that loads multiple panels (multiple instances of PanelController) and as each panel is instantiated it loads its content sometimes dynamically. My issue was in the case where the first panel was loading an image statically and the second panel was fetching its content from the back-end. That first image took a few seconds to load (it is a dynamically generated graph) and was blocking the second panel from fetching its content.

Here's a simple example of its usage:

``<rs-async-img src="/some/image/url.jpg" rs-placeholder="Please wait. Loading..." class="some-image-class"/>``

The directive will first insert an &lt;em&gt; tag with some placeholder text inside it. Then it will use a promise to load the image asynchronously. Upon successfully loading, the placeholder is replaced with the loaded image.
