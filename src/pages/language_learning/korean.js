import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "My Korean notes";
export const sourcesColor = {4:null,  11:null, 12:null,13:null};
export const additionalResources = [72];

export const content = <>
<h1>My Korean Notes</h1> 

<h2 id="rr">Basic Reading</h2>
<div className="content">
	<h3>Korean Phonology (from Wikipedia)</h3>
	<TableDiv style={{width: "58%", marginLeft: "1%", marginRight: "1%", float: "left"}}>
		<caption>Consonant phonemes</caption>
		<tbody>
			<tr>
				<th colSpan="2"></th><th>Bilabial</th><th>Alveolar</th><th>Alveolo-palatal/Palatal</th><th>Velar</th><th>Glottal</th>
			</tr>
			<tr><th colSpan="2">Nasal</th><td>ㅁ</td><td>ㄴ</td><td></td><td>ㅇ</td><td></td></tr>
			<tr>
				<th rowSpan="3">Stop and affricate</th>
				<th>plain</th>
				<td>ㅂ</td>
				<td>ㄷ</td>
				<td>ㅈ</td>
				<td>ㄱ</td>
				<td></td>
			</tr>
			<tr>
				<th>tense</th>
				<td>ㅃ</td>
				<td>ㄸ</td>
				<td>ㅉ</td>
				<td>ㄲ</td>
				<td></td>
			</tr>
			<tr>
				<th>aspirated</th>
				<td>ㅍ</td>
				<td>ㅌ</td>
				<td>ㅊ</td>
				<td>ㅋ</td>
				<td></td>
			</tr>
			<tr>
				<th rowSpan="2">Fricative</th>
				<th>plain/aspirated</th>
				<td></td>
				<td>ㅅ</td>
				<td></td>
				<td></td>
				<td>ㅎ</td>
			</tr>
			<tr>
				<th>tense</th>
				<td></td>
				<td>ㅆ</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th colSpan="2">Liquid</th>
				<td></td>
				<td>l ~ ɾ ㄹ</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</TableDiv>
	<TableDiv style={{width: "38%", marginLeft: "1%", marginRight: "1%", float: "right"}}>
		<caption>Seoul Korean monophthongs</caption>
		<tbody>
		<tr>
			<th rowSpan="2"></th>
			<th>Front</th>
			<th>Central</th>
			<th colSpan="3">Back</th>
		</tr>
		<tr>
			<th colSpan="3">unrounded</th>
			<th colSpan="2">rounded</th>
		</tr>
		<tr>
			<th>Close</th>
			<td>ㅣ</td>
			<td></td>
			<td>ㅡ</td>
			<td>ㅜ</td>
			<td>ㅗ</td>
		</tr>
		<tr>
			<th>Mid</th>
			<td>ㅔ ㅐ</td>
			<td></td>
			<td colSpan="3">ㅓ</td>
		</tr>
		<tr>
			<th>Open</th>
			<td></td>
			<td>ㅏ</td>
			<td colSpan="3">
			</td>
		</tr>
		</tbody>
	</TableDiv>
	<div style={{width:"100%",clear:"both"}}> </div>
	<h3>Consonants (youtube.com/watch?v=4ItnWxGxFIw)</h3>
	<div style={{float: "left", width: "39%", marginLeft: "1%"}}>
	<ul>
		<li><b>ㄱ =</b> <span style={{color:"darkcyan"}}>g</span>, <span style={{color:"crimson"}}>k</span>; <b>ㄷ =</b> <span style={{color:"darkcyan"}}>d</span>, <span style={{color:"crimson"}}>t</span>; <b>ㅂ =</b> <span style={{color:"darkcyan"}}>b</span>, <span style={{color:"crimson"}}>p</span>:<SubList>
			<li><span style={{color:"darkcyan"}}>g, d, b: between vowels</span></li>
			<li><span style={{color:"crimson"}}>k, t, p: all other cases</span></li>
			<li>가구 kagu (furniture)</li>
			<li>두다 tuda (to put)</li>
			<li>곧 kot</li>
			<li>받침 patchim</li>
			<li>바보 pabo</li>
			<li>밥 pap</li>
		</SubList></li>
		<li><b>ㄹ =</b> <span style={{color:"palegreen"}}>r</span>, <span style={{color:"forestgreen"}}>l</span>:<SubList>
			<li><span style={{color:"palegreen"}}>r: first letter, or between vowel sounds</span></li>
			<li><span style={{color:"forestgreen"}}>l: last letter</span></li>
			<li>로마 roma</li>
			<li>나를 noru'l</li>
			<li>팔아요 parayo</li>
		</SubList></li>
		<li><b>ㅅ =</b> <span style={{color:"orangered"}}>s</span>, <span style={{color:"saddlebrown"}}>sh</span>; <b>ㅆ =</b> <span style={{color:"orangered"}}>ss</span>, <span style={{color:"saddlebrown"}}>sh</span>:<SubList>
			<li><span style={{color:"orangered"}}>s, ss: If before column 1 (see picture) vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ)</span></li>
			<li><span style={{color:"saddlebrown"}}>sh: If before column 2 vowels (ㅑ, ㅕ, ㅛ, ㅠ, ㅣ)</span></li>
			<li>사람 saram (person)</li>
			<li>시간 shigan</li>
			<li>쓰다 ssu'da (to write, to use, to wear)</li>
			<li>날씨 nalshi (weather)</li>
			<li><ImgComp src={require("./koreanPics/2.jpg")} style={{width: "90%"}}/></li>
		</SubList></li>
		<li><b>ㅇ =</b> <span style={{color:"yellow"}}>-</span>, <span style={{color:"purple"}}>ng</span>:<SubList>
			<li><span style={{color:"yellow"}}>-: when placed right before vowel</span></li>
			<li><span style={{color:"purple"}}>ng: last letter</span></li>
			<li>일 il</li>
			<li>공 kong</li>
		</SubList></li>
	</ul>
	</div>
	<ImgComp src={require("./koreanPics/1.jpg")} style={{width: "50%",float: "right",marginRight: "5%"}}/>
	<div style={{width:"100%",clear:"both"}}> </div>
	<div style={{float: "left", width: "49%", marginLeft: "0.5%", marginRight: "0.5%"}}>
		<h3>90daykorean.com/korean-pronunciation</h3>
		<ul>
			<li>When ㅂ is followed by ㄴ, it changes from ㅂ+ㄴ to ㅁ+ㄴ (합니다 is pronounced imnida).</li>
			<li>The batchim is the bottom or lower position consonants in a syllable:<SubList>
				<li>바 -&gt; no batchim</li>
				<li>밥 -&gt; ㅂ is the batchim</li>
				<li>밟-&gt; ㄼ is the batchim</li>
			</SubList></li>
			<li>Consonants ㄷ, ㅈ, ㅅ, ㅆ, ㅌ, and ㅊ change to "t" sound when they are in a 받침 position.</li>
			<li>Double 받침:<SubList>
				<li>When the next syllable begins with a vowel, the sound of the latter of the consonants simply gets transferred to the following syllable. For example: 없어 -&gt; 업서 (eopseo). If one of the consonants is ㅎ, this will simply get ignored. Like this: 싫어 -&gt; 시러 (sireo).</li>
				<li>If the next syllable also begins with a consonant, it might get trickier to understand as there is no specific rule, and you'll simply have to memorize how the words are pronounced.</li>
				<li>If there is a cluster with ㄱ in it, such as ㄺ or ㄳ, typically ㄱ is pronounced, and the other is silent.</li>
				<li>If there is a cluster with ㄹ, typically the other consonant will be pronounced, and ㄹ will fall silent.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{float: "right", width: "49%", marginLeft: "0.5%", marginRight: "0.5%"}}>
		<h3>koreanwikiproject.com/wiki/받침</h3>
		<ul>
			<li>If a consonant in the final position is followed by a vowel, the consonant sound shifts over to the syllable with the vowel:</li>
			<TableLI>
				<thead>
					<tr>
					<th> Original </th>
					<th> Actual Pronunciation </th>
					<th> Comment </th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td> 맞아</td>
					<td> 마자</td>
					<td> ㅈ sound shifts over to the next syllable</td>
					</tr>
					<tr>
					<td> 먹어</td>
					<td> 머거</td>
					<td> ㄱ sound shifts over to the next syllable</td>
					</tr>
					<tr>
					<td> 집에</td>
					<td> 지베</td>
					<td> ㅂ sound shifts over to the next syllable</td>
					</tr>
				</tbody>
			</TableLI>
			<li>The only sounds that don't shift over to the next syllable are ㅇ since it is impossible to begin a syllable with an "ng" sound and ㅎ becomes silent when followed by a vowel.</li>
			<li>For a complete set of rules for consonant assimilation, <a href='https://www.koreanwikiproject.com/wiki/Category:Consonant_assimilation'>click here</a>.</li>
		</ul>
	</div>
</div>


</>