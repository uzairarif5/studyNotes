import SubList from "../articleRelatedStuff/SubList";
import { TableLI } from "../articleRelatedStuff/tableManager";
import { MathStuff } from "../articleRelatedStuff/MathStuff"; 

export const title = "My Study Notes: Guide";

export const content = <>
    <h1><u>My Study Notes:</u> About Page</h1>
    <div id="date"><b>Last Edit:</b> {document.lastModified}</div>
    <h4>Main Sources:</h4>
    <ol id="sources">
        <li>Source 1</li>
        <li><span style={{backgroundColor: "#3a3"}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>Source 2, whether a piece of content is from source 1 or 2 would be specified in the article, or you would have to use the colors.</li>
        <li><span style={{backgroundColor: "#c45645"}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>Source 3, sometimes instead of mentioning the source name, colors would be used to identify the source.</li>
    </ol>

    <h2 id="bla">Chapter here</h2>
    <div className="content">
        <div style={{float: "left",width: "48%",marginRight: "1%",marginLeft: "1%"}}>
        <h3>source 1 title example</h3>
        <ul>
            <li>Texts are normally written like this. Text here would be from source 1.</li>
            <li><a href='./'>Text that are in red are not from the main source, they are a hyperlink to the actual source.</a></li>
            <li className="research">Translucent text contains content that need more research.</li>
            <MathStuff>$${"\\begin{align} \\text{Equations and images} \\\\ \\text{will be shown like this}\\end{align}"}$$</MathStuff>
        </ul>
        </div>
        <div style={{float: "right",width: "48%",marginRight: "1%",marginLeft: "1%"}}>
            <div style={{backgroundColor: "#3a3"}}>
                <h3>Subheading A</h3>
                <ul>
                    <li>This bullet point would be from source 2.</li>
                </ul>
            </div>
            <div style={{backgroundColor: "#c45645"}}>
                <h3>Subheading B</h3>
                <ul>
                    <li>This would be from source 3.<SubList>
                        <li>Subpoints would be slightly darker.</li>
                        <TableLI style={{width: "70%",marginLeft: "15%"}}>
                            <thead><tr><th colSpan="2">Example table</th></tr></thead>
                            <tbody>
                            <tr><td colSpan="2">Row 1</td></tr>
                            <tr><td>Row 2 column 1</td><td>Row 2 column2</td></tr>
                            </tbody>
                        </TableLI>
                    </SubList></li>
                    <li className="ownExplanation">Any points written inside a dashed border are from my own explanation.</li>
                </ul>
            </div>
        </div>
    </div>
</>
