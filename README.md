# Sheet of Paper
<img src="http://imperdiblesoft.github.io/sheet-of-paper/images/logo.png" />
Sheet of Paper is a small library to create and print paper documents using HTML language.

With this library, you can use your website data to create a view that looks like a document.
You can also print this "document" by using our <code>sop.print()</code> function.

<h2>Basic Classes</h2>
We provide you some default classes in order to make SoP work. Controling these basic classes will allow you to setup your "document" to make the magic!
<br />
<code>&lt;body class="sop-viewer"&gt;</code><br />
<code>  &lt;div class="sop-page sop-A4"&gt;&lt;/div &gt;</code><br />
<code>&lt;/body &gt;</code><br />


<p><b>sop-viewer</b>: This mandatory class is for setting the document in "viewer" mode, wich is going to draw a grey background and the paper illusion.</p>
<p><b>sop-page</b>: This class create the page itself, the sheet of paper. You can insert as many <code>.sop-page</code> as you want.</p>
<p><b>sop-A4</b>: This class stablishes the size of the paper you want to generate/print.</p>
<p>We are supporting the most used paper sizes:</p>
<ul>
  <li>A3 (sop-A3)</li>
  <li>A4 (sop-A4)</li>
  <li>Legal (sop-legal)</li>
  <li>A5 (sop-A5)</li>
</ul>

<p><b>sop-invisible</b>: This optional class, is a mark to hide all "sop-invisible" elements when printing your document.</p>

<p>Once you know all of this, you can use your custom CSS to customize the content of your document.</p>

<h2>Printing</h2>
<p>A common action for documents is printing them. We suggest you tu use our function custom function.</p>
<code>sop.print()</code>

<p>This function will remove the grey background, paper shadows, and invisible items, so you will get a clean document to print.</p>
<p>Once you close the print dialog, the system will restore the viewer's appearance and will show hidden elements.</p>

<h2>Optional classes</h2>
Besides this, we also provide another usefull classes that allows you to organize your document.

<b><u>Sections</u></b>
<br />
<p><b>sop-header</b>: This will set the header of your documents. All text have less <code>margin-bottom</code> when they are on the header of the document.</p>
<p><b>sop-body</b>: This will set the body of your documents. Here texts works normally.</p>
<p><b>sop-footer</b>: This will set the header of your documents. All text are smaller and they have less <code>margin-bottom</code> when they are on the footer of the document.</p>
<code>&lt;div class="sop-page"&gt;</code><br />
<code>  &lt;div class="sop-header"&gt;</code><br />
<code>  &lt;/div &gt;</code><br />
<code>  &lt;div class="sop-body"&gt;</code><br />
<code>  &lt;/div &gt;</code><br />
<code>  &lt;div class="sop-footer"&gt;</code><br />
<code>  &lt;/div &gt;</code><br />
<code>&lt;/div &gt;</code><br />

<b><u>Section modifiers</u></b>
<br />
<p>You can create childs of <b>sop-header</b> or <b>sop-footer</b> to modify their appeareance:
<p><b>sop-left</b>: This child is going to fill the 30% of the header, and it's going to be attached to the left.</p>
<p><b>sop-center</b>: This child is going to fill the 30% of the header, and it's going to be attached to the center.</p>
<p><b>sop-right</b>: This child is going to fill the 30% of the header, and it's going to be attached to the right</p>
<code>&lt;div class="sop-page"&gt;</code><br />
<code>  &lt;div class="sop-header"&gt;</code><br />
<code>    &lt;div class="sop-right"&gt;</code><br />
<code>      &lt;p&gt;This text is going to be attached to the right and will fill only the 30% of the header width. &lt;/p&gt;</code><br />
<code>    &lt;/div &gt;</code><br />
<code>  &lt;/div &gt;</code><br />
<code>&lt;/div &gt;</code><br />

<b><u>Text modifiers</u></b>
<br />
<p><b>sop-justified</b>: This will set your paragraph as <code>text-align: justify</code>, so both sides margins will look a straight line.</p>
<p><b>sop-center</b>: This sets your paragraph as <code>text-align: center</code>.</p>
<p><b>sop-right</b>: This aligns the text to the right.</p>

