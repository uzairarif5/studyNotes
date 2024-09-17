import SubList from "../../articleRelatedStuff/SubList";

export const title = "My Saved Resources";

export const content = 
<>
	<h1>Saved Resources</h1>
  <h2>List</h2>
  <div className="content">
    <ul>
      <li>I don't want to make notes on every resource I find, but there are some resources which I find very useful and wish to remember. So I have collected them here.</li>
      <li><u>Mathematics:</u><SubList>
        <li>James Stewart Calculus (8th Edition) (Early Transcendentals)</li>
      </SubList></li>
      <li><u>Computer Science Fundamentals:</u><SubList>
        <li><a href='https://pages.cs.wisc.edu/~remzi/OSTEP/'>Operating Systems: Three Easy Pieces</a> by Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau</li>
      </SubList></li>
      <li><u>Programming:</u><SubList>
        <li>Data Mining and Business Analytics with R by Johannes Ledolter</li>
      </SubList></li>
    </ul>
  </div>
</>