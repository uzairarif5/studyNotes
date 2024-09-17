import SubList from "../../articleRelatedStuff/SubList";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "My Korean notes";
export const sourcesColor = {4:null, 10:"#48a7d3", 11:null, 12:null, 13:"#4f94ac"};
export const content = <>
<h1>My Korean Notes</h1> 
{getSourcesOL(sourcesColor)}
<ol id="additionalResources">
	<li><a href='https://www.verbix.com/languages/korean'>Korean verb conjugator</a></li>
</ol>

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

<h2 id="basicPhrasesAndGrammar">Basic Phrases And Grammar</h2>
<div className="content">
	<div style={{float: "left",width: "49%",marginLeft: "0.5%"}}>
		<h3>Basic Phrases</h3>
		<div data-source={10}>
			<ul>
			<li>Saying 'hello' or 'goodbye' to close friends the same age or younger: 안냥!</li>
			<li>Saying 'hello' to anyone else: 안냥하세요!</li>
			<li>Saying 'goodbye' to anyone else:<SubList>
				<li>안냥히 가세요 to someone going somewhere.</li>
				<li>안냥히 겨세요 to someone staying.</li>
			</SubList></li>
			<li>Introducing yourself when meeting anyone for the first time:<SubList>
				<li>저는 [your name] 이에요 if your name ends with a consonant.</li>
				<li>저는 [your name] 여요 if your name ends with a vowel.</li>
				<li>저는 can be shortened to 전.</li>
				<li>제 이름은... (my name...)</li>
				<TableLI>
					<tbody>
						<tr><td>제 이름은 빌리예요.</td><td>My name is Billy.</td></tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>'Nice to meet you':<SubList>
				<li>To people who look to be a similar age or younger: 반가워요.</li>
				<li>To anyone else: 반갑습니다.</li>
				<li>Reply: 네, 반가워요; 네, 반갑습니다</li>
			</SubList></li>
			<li>Saying 'thanks':<SubList>
				<li>고마워 (close friends)</li>
				<li>고마워요 (casual)</li>
				<li>고맙습니다 (formal)</li>
				<li>감사합니다 (more formal)</li>
				<li>The first three come from 고맙다 while 감사합니다 comes from 감사하다 (both mean 'to be thankful').</li>
			</SubList></li>
			<li>Saying 'welcome':<SubList>
				<li>아니야 (close friends)</li>
				<li>아니에요 (anyone else)</li>
				<li>아닙니다 (formal)</li>
				<li>They all come from 아니다.</li>
			</SubList></li>
			<li>Saying 'Excuse Me':<SubList>
				<li>여기요 (for strangers like a waiter)</li>
				<li>저기요 (for strangers).</li>
				<li>여기 means 'here', while 저기 means 'over there', and the 요 is added for politeness.</li>
				<li>실례합니다 (apology in advance)</li>
				<li>실례합니다 comes from 실례하다 and means 'to be a discourtesy'.</li>
				<li>실례지만... (at the start of a sentence), it is a combination of 실례 ('Excuse me') and 지만 ('but').</li>
				<li>잠시만요 (when moving through a crowd or when asking someone to wait for a moment).</li>
			</SubList></li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/yes-in-korean/'>How to Say "Yes"</a>:<SubList>
					<li>예 (formal)</li>
					<li>네 (standard)</li>
					<li>응 / 어 (informal)</li>
				</SubList></li>
				<li><a href='https://www.90daykorean.com/no-in-korean/'>How to Say "No"</a>:<SubList>
					<li>아니요 (formal and standard) (alternate spelling: 아뇨)</li>
					<li>아니오 (old style)</li>
					<li>아니 (informal)</li>
					<TableLI>
						<tbody>
							<tr><td>김치를 좋아해? 아니</td><td>Do you like kimchi? No.</td></tr>
							<tr><td>바쁘세요? 아니오.</td><td>Are you busy? No.</td></tr>
							<tr><td>김치를 좋아해요? 아니요.</td><td>Do you like kimchi? No.</td></tr>
						</tbody>
					</TableLI>
					<li>How to say "it is not":<SubList>
						<li>아니다 (meaning 'not') changes to 아니에요 or 아닙니다 when speaking formally.</li>
						<li>아니다 (meaning 'not') changes to 아니야 when speaking informally.</li>
						<TableLI style={{minWidth: "450px"}}>
							<caption>아니다 conjugation (least formal to most) (from Wikipedia)</caption>
							<tbody><tr><td>아니야</td><td>아니에요</td><td>아니다</td><td>아닙니다</td></tr></tbody>
						</TableLI>
						<TableLI>
							<tbody>
								<tr><td>중국사람 아니야.</td><td>I'm not Chinese.</td></tr>
								<tr><td>영국사람 아니에요.</td><td>I'm not British.</td></tr>
								<tr><td>일본사람 아닙니다.</td><td>I'm not Japanese.</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>안돼요: "It is not allowed"</li>
					<li>못해요: "I can't do it"</li>
				</SubList></li> 
				<li>More ways to say "yes" or "no":<SubList>
					<li>The verbs 있어요 (to have or exist) and 없어요 (to not have or not exist) can be used to say "yes" and "no" in Korean.</li>
					<TableLI>
						<caption>Conjugations (least formal to most) (from Wikipedia)</caption>
						<tbody><tr><td>있어</td><td>있어요</td><td>있는다</td><td>있습니다</td></tr></tbody>
						<tbody><tr><td>없어져</td><td>없어져요, 없어지어요</td><td>없어진다</td><td>없어집니다</td></tr></tbody>
					</TableLI>
					<TableLI>
						<tbody><tr><td>포인트 카드 있어요?</td><td>Do you have a point card?</td></tr></tbody>
						<tbody><tr><td>있어요</td><td>Yes, I do [literally - it exists]</td></tr></tbody>
						<tbody><tr><td>없어요</td><td>No, I don't [literally - it doesn't exist]</td></tr></tbody>
					</TableLI>
					<li>In Korean, people may ask you if you know some piece of information. Rather than saying "yes" or "no", you can reply with the appropriate verb to indicate if you know or not.</li>  
					<li>알아요 means 'to know' and 몰라요 means 'to not know'.</li>
					<TableLI style={{width:"450px"}}>
						<caption>알다 conjugation (least formal to most) (from Wikipedia)</caption>
						<tbody><tr><td>알아</td><td>알아요</td><td>안다</td><td>압니다</td></tr></tbody>
					</TableLI>
					<TableLI style={{width:"450px"}}>
						<caption>모르다 conjugation (least formal to most) (from Wikipedia)</caption>
						<tbody><tr><td>몰라</td><td>몰라요</td><td>모른다</td><td>모릅니다</td></tr></tbody>
					</TableLI>
					<TableLI>
						<tbody><tr><td>스티브의 휴대폰번호를 알아요?</td><td>Do you have a point card?</td></tr></tbody>
						<tbody><tr><td>알아요</td><td>Yes, I do [literally - I know]</td></tr></tbody>
						<tbody><tr><td>몰라요</td><td>No, I don't [literally - I don't know]</td></tr></tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>
	<div style={{float: "right",width: "49%",marginRight: "0.5%"}}>
		<h3>Basic Grammar (Part 1)</h3>
		<div data-source={10}>
			<ul>
				<li>Intro to verbs:<SubList>
					<li>Every verb ends in 다 before its conjugated.</li>
					<li>Korean verbs do not change based on the doer (I swim: 저는 수영해요, Billy swims: 빌리 수영해요)</li>
					<li>Verbs conjugated based on tenses:<SubList>
						<TableLI><tbody>
							<tr><td>I swim</td><td>저는 수영해요</td></tr>
							<tr><td>I swam</td><td>저는 수영했어요</td></tr>
							<tr><td>I will swim</td><td>저는 수영할 거여요</td></tr>
							<tr><td>I am swimming</td><td>저는 수영아고 있어요</td></tr>
						</tbody></TableLI>
					</SubList></li>
					<li>To get the verb stem, just remove the 다 at the end (가다 -&gt; 가).</li>
					<TableLI style={{width:"400px"}}>
						<caption>가다 (least formal to most) (from Wikipedia)</caption>
						<tbody>
							<tr><td>가</td><td>가요</td><td>간다</td><td>갑니다</td></tr>
						</tbody>
					</TableLI>                
				</SubList></li>
				<li>"I want":<SubList>
					<li>To say you want to do a verb, attach 고 싶다 to the verb stem:<SubList>
						<li>가다 -&gt; 가고 싶다 (to want to go)</li>
						<li>먹다 -&gt; 먹고 싶다 (to want to eat)</li>
						<li>고 싶다 itself can be conjugated</li>
						<TableLI style={{width:"450px"}}>
							<caption>싶다 (least formal to most) (from Wikipedia)</caption>
							<tbody>
								<tr><td>싶어</td><td>싶어요</td><td>싶다</td><td>싶습니다</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>"I want to have":<SubList>
						<li>가지다 (meaning 'to have') is sometimes shortened to 갖다.</li>
						<TableLI>
							<caption>가지다 (least formal to most) (from Wikipedia)</caption>
							<tbody>
								<tr><td>가져</td><td>가져요, 가지어요</td><td>가진다</td><td>가집니다</td></tr>
							</tbody>
						</TableLI>
						<li>To say 'you want something', you say: "noun + 을/를 가지고 싶다" (I want to have noun).</li>
					</SubList></li>
				</SubList></li>
				<li><b>이다</b> means 'to be':<SubList>
					<TableLI style={{width:"450px"}}>
						<caption>이다 (least formal to most) (from Wikipedia)</caption>
						<tbody><tr><td>이다</td><td>이야</td><td>이에요, 예요</td><td>입니다</td></tr></tbody>
					</TableLI>
				</SubList></li>
				<li><b>Object marker</b> and <b>Topic marker</b>:<SubList>
					<li><b>Object marker:</b> 을 after consonant, 를  after vowel, it marks the object of an action verb.</li>
					<li><b>Topic marker:</b> 은 after consonant, 는  after vowel, it means "as for.." or "when it comes to...".</li>
					<TableLI><tbody>
						<tr><td>자는 팝콘을 먹고 싶어요</td><td>I want to eat popcorn</td></tr>
						<tr><td>자는 피자를 좋아해요</td><td>I like pizza</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>도</b> ('too' or 'even') replaces topic marker, object marker and subject marker (저도 'even me').</li>
				<li><b>에</b> is used after a noun is mark it as a location:<SubList>
					<TableLI><tbody>
						<tr><td>빌리는 서울에 가요</td><td>Billy goes to Seoul</td></tr>
						<tr><td>저는 학교에 가고 싶어요</td><td>I want to go to school</td></tr>
					</tbody></TableLI>
					<li>에 + 있다 (to exist) = is, am, etc.</li>
					<TableLI><tbody>
						<tr><td>빌리는 집에 있어요</td><td>Billy exists at (or in) home<br/>Billy is at home</td></tr>
						<tr><td>저는 은행에 있어요</td><td>I am at the bank</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>This and that:<SubList>
					<TableLI><tbody>
						<tr><td>This (close to the speaker)</td><td>이</td></tr>
						<tr><td>That (far from speaker but close to listener)</td><td>그</td></tr>
						<tr><td>That (far from speaker and listener)</td><td>저</td></tr>
					</tbody></TableLI>
					<li>것 means 'thing'. 이것은 영화예요 means 'This is a movie'.</li>
					<li>이것, 그것 and 저것 are often shortened to 이거, 그거 and 저거.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/korean-demonstrative-pronouns/'>Demonstrative pronouns</a>:<SubList>
					<li style={{width: "60%", float: "right"}}>그 will be used when the object is far from the speaker but is located near the listener.</li>
					<li style={{width: "60%", float: "right"}}>In case of 저, the item is far from the speaker and the listener. You may translate it as "that over there".</li>
					<li style={{width: "60%", float: "right"}}>거기 (geogi) is also used to demonstrate that something is far from the speaker but near the listener.</li>
					<li style={{width: "60%", float: "right"}}>저기 (jeogi) is used when something is far from the speaker and the listener.</li>
					<TableLI style={{width: "40%", float: "left"}}>         
						<thead><tr><th colSpan="2">Object</th></tr></thead>
						<tbody>
							<tr><td>This</td><td>이거</td></tr>
							<tr><td>That</td><td>그거</td></tr>
							<tr><td>That</td><td>저거</td></tr>
						</tbody>
						<thead><tr><th colSpan="2">Person</th></tr></thead>
						<tbody>
							<tr><td>This person</td><td>이분</td></tr>
							<tr><td>That person</td><td>그분</td></tr>
							<tr><td>That person</td><td>저분</td></tr>
						</tbody>
						<thead><tr><th colSpan="2">Location</th></tr></thead>
						<tbody>
							<tr><td>Here</td><td>여기</td></tr>
							<tr><td>There</td><td>거기</td></tr>
							<tr><td>There</td><td>저기</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><a href='https://www.90daykorean.com/korean-pronouns'>Pronouns</a>:<SubList>
					<li style={{listStyleType: "none"}}>
						<div>
							<TableDiv style={{float: "left",width: "48%",marginLeft: "1%"}}><tbody>
								<tr><td>I</td><td>저는<br/>
								나는</td><td>formal<br/>
								informal</td></tr>
								<tr><td>I am</td><td>제가<br/>
								내가</td><td>formal<br/>
								informal</td></tr>
								<tr><td>Me</td><td>저를<br/>
								나를</td><td>formal<br/>
								informal</td></tr>
								<tr><td>Me too</td><td>저도<br/>
								나도</td><td>formal<br/>
								informal</td></tr>
								<tr><td>My</td><td>저의<br/>
								나의</td><td>formal<br/>
								informal</td></tr>
							</tbody></TableDiv>
							<TableDiv style={{float: "right",width: "48%",marginRight: "1%"}}><tbody>
								<tr><td>We</td><td>저희는<br/>
								우리는</td><td>formal<br/>
								informal</td></tr>
								<tr><td>We are</td><td>저희가<br/>
								우리가</td><td>formal<br/>
								informal</td></tr>
								<tr><td>Us</td><td>저희를<br/>
								우리를</td><td>formal<br/>
								informal</td></tr>
								<tr><td>We too</td><td>저희도<br/>
								우리도</td><td>formal<br/>
								informal</td></tr>
								<tr><td>Our</td><td>저희의<br/>
								우리의</td><td>formal<br/>
								informal</td></tr>
							</tbody></TableDiv>
						</div>
						<div style={{clear: "both"}}></div>
					</li>
					<li style={{listStyleType: "none"}}>
						<div style={{float: "left",width: "48%",marginLeft: "1%"}}>
							<TableDiv>
								<caption>You (Singular)</caption>
								<tbody>
									<tr>
									<td>You</td><td>당신이<br/>
									그쪽이<br/>
									그대가<br/>
									네가</td><td>formal<br/>
									polite<br/>
									polite<br/>
									informal</td>
									</tr>
									<tr>
									<td>You are</td><td>당신은<br/>
									그쪽은<br/>
									그대는<br/>
									너는</td><td>formal<br/>
									polite<br/>
									polite<br/>
									informal</td>
									</tr>
									<tr>
									<td>You too</td><td>당신도<br/>
									그쪽도<br/>
									그대도<br/>
									너도</td><td>formal<br/>
									polite<br/>
									polite<br/>
									informal</td>
									</tr>
									<tr>
									<td>Your</td><td>당신의<br/>
									그쪽의<br/>
									그대의<br/>
									너의</td><td>formal<br/>
									polite<br/>
									polite<br/>
									informal</td>
									</tr>
								</tbody>
							</TableDiv>
							<TableDiv><tbody>
								<tr>
								<td>He<br/>
								She or They</td><td>그는<br/>
								그녀는</td>
								</tr>
								<tr>
								<td>He is<br/>
								She is</td><td>그가<br/>
								그녀가</td>
								</tr>
								<tr>
								<td>Him <br/>
								Her</td><td>그를<br/>
								그녀를</td>
								</tr>
								<tr>
								<td>Him too<br/>
								She too</td><td>그도<br/>
								그녀도</td>
								</tr>
								<tr>
								<td>His<br/>
								Her</td><td>그의<br/>
								그녀의</td>
								</tr>
							</tbody></TableDiv>
						</div>
						<TableDiv style={{float: "right",width: "48%",marginRight: "1%"}}>
							<caption>You (Plural)</caption>
							<tbody>
								<tr>
								<td>You are</td><td>당신들은<br/>
								그대들은<br/>
								너희는<br/>
								너네는<br/>
								자네는</td><td>formal<br/>
								polite<br/>
								informal<br/>
								informal<br/>
								informal</td>
								</tr>
								<tr>
								<td>You</td><td>당신들이<br/>
								그대들이<br/>
								너희가<br/>
								너네가<br/>
								자네가</td><td>formal<br/>
								polite <br/>
								informal<br/>
								informal<br/>
								informal</td>
								</tr>
								<tr>
								<td>You</td><td>당신들을<br/>
								그대들을<br/>
								너희를<br/>
								너네를<br/>
								자네를</td><td>formal<br/>
								polite<br/>
								informal<br/>
								informal <br/>
								informal</td>
								</tr>
								<tr>
								<td>You too</td><td>당신들도<br/>
								그대들도<br/>
								너희도<br/>
								너네도<br/>
								자네도</td><td>formal<br/>
								polite<br/>
								informal <br/>
								informal<br/>
								informal</td>
								</tr>
								<tr>
								<td>Yours</td><td>당신들의<br/>
								그대들의<br/>
								너희의<br/>
								너네의<br/>
								자네의</td><td>formal<br/>
								polite <br/>
								informal<br/>
								informal <br/>
								informal</td>
								</tr>
								</tbody>
						</TableDiv>
						<div style={{clear: "both"}}></div>
					</li>
					<li>If you want to emphasize that you are speaking of "they" in the plural, simply add 들 (deul) after 그 or 그녀.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={10}>
			<ul>
				<li>하다 means 'to do':<SubList>
					<li>하다 is an action verb that means 'to do' when used by itself or with a noun.</li>
					<TableLI><tbody>
					<tr><td>요리 (cooking) + 하다 -&gt; 요리(를) 하다</td></tr>
					<tr><td>말 (speech) + 하다 -&gt; 말(을) 하다</td></tr>
					<tr><td>공부 (study) + 하다 -&gt; 공부(를) 하다</td></tr>
					<tr><td>일 (work) + 하다 -&gt; 일(을) 하다</td></tr>
					<tr><td>사랑 (love) + 하다 -&gt; 일(을) 하다</td></tr>
					</tbody></TableLI>
					<li>사랑(을) 하다 is only used for animals or people, but not things.</li>
					<li>The object marker is optional.</li>
					<li>좋아하다 (to like) and 싫어하다 (to dislike) are not combination of noun and 하다.</li>
				</SubList></li>
				<li>Intro to conjugation (Conjugating 먹다):<SubList>
					<TableLI><tbody>
						<tr><td rowSpan="3">Present</td><td>먹어 [casual]</td><td>I eat</td></tr>
						<tr><td>먹어요 [informal]</td><td>I eat</td></tr>
						<tr><td>먹습니다 [formal]</td><td>I eat</td></tr>
						<tr><td rowSpan="3">Past</td><td>먹었어 [casual]</td><td>I ate</td></tr>
						<tr><td>먹었어요 [informal]</td><td>I ate</td></tr>
						<tr><td>먹었습니다 [formal]</td><td>I ate</td></tr>
						<tr><td rowSpan="3">Future</td><td>먹을 거야 [casual]</td><td>I will eat</td></tr>
						<tr><td>먹을 거예요 [informal]</td><td>I will eat</td></tr>
						<tr><td>먹겠습니다 [formal]</td><td>I will eat</td></tr>
					</tbody></TableLI>
					<li>There are many ways to conjugate a verb, but you only need to learn each conjugation form and its rules one time, and you can apply it to any verb.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/korean-conjugation/'>Korean conjugation</a>:<SubList>
					<li>Korean verb and adjective conjugations are almost the same.</li>
					<TableLI><caption>보다 Conjugation (least formal to most formal)</caption><tbody>
						<tr>
						<td>봐 (bwa)</td><td>I see</td><td rowSpan="3">Present Tense</td>
						</tr>
						<tr>
						<td>봐요 (bwayo)</td><td>I see</td>
						</tr>
						<tr>
						<td>봅니다 (bomnida)</td><td>I see</td>
						</tr>
						<tr>
						<td>봤어 (bwasseo)</td><td>I saw</td><td rowSpan="3">Past Tense</td>
						</tr>
						<tr>
						<td>봤어요 (bwasseoyo)</td><td>I saw</td>
						</tr>
						<tr>
						<td>봤습니다 (bwasseumnida)</td><td>I saw</td>
						</tr>
						<tr>
						<td>볼 거야 (bol geoya)</td><td>Will see</td><td rowSpan="3">Future Tense</td>
						</tr>
						<tr>
						<td>볼 거예요 (bol geoyeyo)</td><td>Will see</td>
						</tr>
						<tr>
						<td>볼 겁니다 (bol geomnnida)</td><td>Will see</td>
						</tr>
					</tbody></TableLI>
					<TableLI><caption>만들다 Conjugation (least formal to most formal)</caption><tbody>
						<tr>
						<td>만들어 (mandeureo)</td><td>I make</td><td rowSpan="3">Present Tense</td>
						</tr>
						<tr>
						<td>만들어요 (mandeureoyo)</td><td>I make</td>
						</tr>
						<tr>
						<td>만듭니다 (mandeumnida)</td><td>I make</td>
						</tr>
						<tr>
						<td>만들었어 (mandeureosseo)</td><td>I made</td><td rowSpan="3">Past Tense</td>
						</tr>
						<tr>
						<td>만들었어요 (mandeureosseoyo)</td><td>I made</td>
						</tr>
						<tr>
						<td>만들었습니다 (mandeureosseumnida)</td><td>I made</td>
						</tr>
						<tr>
						<td>만들 거야 (mandeul geoya)</td><td>Will make</td><td rowSpan="3">Future Tense</td>
						</tr>
						<tr>
						<td>만들 거예요 (mandeul geoyeyo)</td><td>Will make</td>
						</tr>
						<tr>
						<td>만들 겁니다 (mandeul geomnnida)</td><td>Will make</td>
						</tr>
					</tbody></TableLI>
					<li>The verb 이다 (ida) is the Korean equivalent of "to be" in English. It is usually used to identify people and objects. When using it to form sentences, it can be used with the following sentence structure:</li>
					<TableLI><tbody><tr><td>Subject and particle + Noun입니다</td></tr></tbody></TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>
</div>

<h2 id="basicPhrasesAndGrammar2">Basic Phrases And Grammar 2</h2>
<div className="content">
	<div style={{float: "left",width: "49%",marginLeft: "0.5%"}}>
		<h3>Basic Grammar (Part 2)</h3>
		<div data-source={10}>
			<ul>
				<li>Intro to adverbs:<SubList>
					<li>The adverb comes before what they describe.</li>
					<TableLI><tbody>
						<tr><td>막다 (to eat) + 많이 (a lot)</td><td>많이 막다 (to eat a lot)</td></tr>
						<tr><td>일(을) 하다 (to work) + 빨리 (quickly)</td><td>빨리 일(을) 하다 (to work quickly)<br/>Also acceptable: 일(을) 빨리 하다.</td></tr>
					</tbody></TableLI>

					<TableLI><caption>Adverbs can also describe other adverbs</caption><tbody>
						<tr><td>아주 (very) + 잘 (well)</td><td>아주 잘</td></tr>
						<tr><td>조금 (a little) + 더 (more)</td><td>조금 더</td></tr>
						<tr><td>더 (more) + 빨리 (quickly)</td><td>더 빨리</td></tr>
					</tbody></TableLI>
				</SubList></li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>                
				<li><a href='https://www.90daykorean.com/korean-adverbs'>Making Adverbs</a>:<SubList>
					<li>The <b>conjugation 히</b> is usually added to adjectives that end with -하다 (hada). To do that, you replace -하다 (hada) in the dictionary form of the word with 히 (hi).</li>
					<li>With <b>~게 conjugation</b>: simply replace 다 with 게 (ge).</li>
					<li><b>~으로</b> is a post-position, not an adverb, but when used together with adjectives, you can create adverbs from them. It's used with adjectives that end in the suffix 적 (jeok). If you translate Korean to English, 으로 adverbs mean "in some way".</li>
					<TableLI>
						<tbody>
							<tr>
								<td>bad</td>
								<td>나쁘다</td>
								<td>badly</td>
								<td>나쁘게</td>
							</tr>
							<tr>
								<td>certain</td>
								<td>확실하다</td>
								<td>certainly, decidedly</td>
								<td>확실히</td>
							</tr>
							<tr>
								<td>complete</td>
								<td>완전하다</td>
								<td>completely</td>
								<td>완전히</td>
							</tr>
							<tr>
								<td>complete, absolute, entire</td>
								<td>전적</td>
								<td>completely, absolutely, entirely</td>
								<td>전적으로</td>
							</tr>
							<tr>
								<td>continuous</td>
								<td>지속적</td>
								<td>continually</td>
								<td>지속적으로</td>
							</tr>
							<tr>
								<td>detailed</td>
								<td>구체적</td>
								<td>in detail, concretely</td>
								<td>구체적으로</td>
							</tr>
							<tr>
								<td>enourmous</td>
								<td>엄청나다</td>
								<td>enormously</td>
								<td>엄청나게</td>
							</tr>
							<tr>
								<td>even, regular</td>
								<td>고르다</td>
								<td>evenly</td>
								<td>고르게</td>
							</tr>
							<tr>
								<td>faint, dim</td>
								<td>희미하다</td>
								<td>faintly, dimly</td>
								<td>희미하게</td>
							</tr>
							<tr>
								<td>far</td>
								<td>멀다</td>
								<td>far</td>
								<td>멀게</td>
							</tr>
							<tr>
								<td>fervent, devout</td>
								<td>열렬하다</td>
								<td>fervently</td>
								<td>열렬하게</td>
							</tr>
							<tr>
								<td>full</td>
								<td>충분하다</td>
								<td>fully</td>
								<td>충분히</td>
							</tr>
						</tbody>
					</TableLI>
					<TableLI>
						<caption>Adverbs that don't follow the rules</caption>
						<tbody>
							<tr>
								<td>less</td>
								<td>더 적게</td>
							</tr>
							<tr>
								<td>most</td>
								<td>제일</td>
							</tr>
							<tr>
								<td>practically, virtually</td>
								<td>사실상</td>
							</tr>
							<tr>
								<td>somewhat</td>
								<td>약간</td>
							</tr>
							<tr>
								<td>too</td>
								<td>너무</td>
							</tr>
							<tr>
								<td>very</td>
								<td>매우</td>
							</tr>
							<tr>
								<td>well</td>
								<td>잘</td>
							</tr>
							<tr>
								<td>sometimes</td>
								<td>때때로</td>
							</tr>
							<tr>
								<td>seldom</td>
								<td>좀처럼</td>
							</tr>
							<tr>
								<td>never</td>
								<td>결코</td>
							</tr>
							<tr>
								<td>annually</td>
								<td>매년</td>
							</tr>
							<tr>
								<td>soon, instantly</td>
								<td>곧</td>
							</tr>
							<tr>
								<td>eventually</td>
								<td>결국</td>
							</tr>
							<tr>
								<td>hourly</td>
								<td>매 시</td>
							</tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
		<div data-source={10}>
			<ul>
				<li><b>Descriptive verbs:</b><SubList>
					<li><b>Actions verbs</b> are any verbs that do something while <b>descriptive verbs</b> describe something.</li>
					<TableLI><tbody>
						<tr><td>좋다</td><td>이 영화는 <b>좋아요</b></td><td>This movie is good</td></tr>
						<tr><td>좋아하다</td><td>저는 김치를 <b>좋아해요</b></td><td>I like kimchi</td></tr>
						<tr><td>맛(이) 있다</td><td>김치는 <b>맛이 있어요</b></td><td>As for kimchi, flavour exists<br/>Kimchi tastes good</td></tr>
						<tr><td>재미(가) 있다</td><td>이 영화는 <b>재미있다</b></td><td>As for this movie, enjoyment exists<br/>This movie is fun</td></tr>
					</tbody></TableLI>
					<li>이 and 가 are optional subject markers.</li>
				</SubList></li>
				<li><b>Subject marker:</b><SubList>
					<li>Marks the subject of a verb (how or what is doing the action, or who or what is being described).</li>
					<li>Use 이 after a consonant, and 가 after a vowel.</li>
					<li>빌리는 똑똑해요 (As for Billy, he is smart): Billy is now the topic of the conversation. Any sentences after this can be about Billy.</li>
					<li>빌리가 똑똑해요: Whatever the topic was before, hasn't changed here. If the topic was 처는 then the sentence becomes "As for me, (I think) Billy is smart".</li>
					<TableLI><tbody>
						<tr><td>저는 피자가 맛있어요</td><td>As for me, pizza is delicious</td></tr>
						<tr><td>저는 햄버거<b>가</b> 더 맛있어요</td><td>As for me, hamburger are more delicious</td></tr>
						<tr><td>저는 김치도 좋아해요</td><td>I also like kimchi</td></tr>
						<tr><td>저는 피자를 더 좋아해요. 김치<b>가</b> 매워요.</td><td>I like pizze more. Kimchi is spicy.</td></tr>
					</tbody></TableLI>
				</SubList> </li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/korean-adjectives/'>Adjectives (Descriptive verbs)</a>:<SubList>
					<li>The word for "adjective" in the Korean language is 형용사.</li>
					<li>The basic way to conjugate a Korean adjective is by removing 다 from the word. You will then be left with the verb stem. If the verb stem ends with a consonant, you will add ~은 or ~는. ~는 typically only follows after the verb stem ends in the letter ㅅ or ㅆ. In the case of a vowel, ~ㄴ is added to the verb stem.</li>
					<TableLI>
						<thead><tr><th>English</th><th>Verb Form</th><th>Conjugated Adjective</th></tr></thead>
						<tbody>
							<tr>
								<td>Happy</td>
								<td>행복하다</td>
								<td>행복한</td>
							</tr>
							<tr>
								<td>Salty</td>
								<td>짜다</td>
								<td>짠</td>
							</tr>
							<tr>
								<td>Small</td>
								<td>작다</td>
								<td>작은</td>
							</tr>
							<tr>
								<td>Cool</td>
								<td>멋있다</td>
								<td>멋있는</td>
							</tr>
							<tr>
								<td>Fun</td>
								<td>재미있다</td>
								<td>재미있는</td>
							</tr>
						</tbody>
					</TableLI>
					<li>Irregular adjectives:<SubList>
						<li>If the adjective stem ends in ㅂ, drop the ㅂ, and add ~운.</li>
						<li>If the adjective stem ends in ㄹ, the ㄹ gets dropped, and ~ㄴ is added to the stem.</li>
						<li>In some cases, when the adjective stems end in ㅎ, it will get dropped, and the stem gets treated as if it ends in a vowel. However, in some cases, the ㅎ remains, and the ~은 ending gets added instead.</li>
						<TableLI>
							<thead><tr><th>English</th><th>Verb Form</th><th>Conjugated Adjective</th></tr></thead>
							<tbody>
								<tr>
									<td>Easy<br/></td>
									<td>쉽다 (swipda)</td>
									<td>쉬운 (swiun)</td>
								</tr>
								<tr>
									<td>Hot<br/></td>
									<td>덥다 (deopda)</td>
									<td>더운 (deoun)</td>
								</tr>
								<tr>
									<td>Far</td>
									<td>멀다 (meolda)</td>
									<td>먼 (meon)</td>
								</tr>
								<tr>
									<td>Rare<br/></td>
									<td>드물다 (deumulda)</td>
									<td>드문 (deumun)</td>
								</tr>
								<tr>
									<td>Blue</td>
									<td>파랗다 (parata)</td>
									<td>파란 (paran)</td>
								</tr>
								<tr>
									<td>Good</td>
									<td>좋다</td>
									<td>좋은</td>
								</tr>
							</tbody>
						</TableLI>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={10}>
			<ul>
				<li>Plural marker <b>들</b>:<SubList>
					<li>To make a noun plural, just attach <b>들</b>. Example: 노양이 becomes 노양이들.</li>
					<li>Most of the time, it is not necessary to use a plural noun, it can be understood from the context if the noun is plural or not. Plural nouns are necessary when you are talking about a noun in general.</li>
					<TableLI><tbody><tr><td>강아지들은 똑똑해요</td><td>Dogs (in general) are smart</td></tr></tbody></TableLI>
				</SubList></li>
				<li><b>막</b> ('only'):<SubList>
					<li>Attached directly after a word (like 도).</li>
					<TableLI><tbody>
						<tr><td>저<b>만</b> 김치를 좋아해요</td><td>Only I like kimchi</td></tr>
						<tr><td>저는 김치<b>만</b> 좋아해요</td><td>I like only kimchi</td></tr>
					</tbody></TableLI>
					<li>막 and 도 can be used between verbs that use 하다 with a noun. Example: 공부(를) 하다 -&gt; 공부막 하다 (to only study) or 공부도 하다 (to also study).</li>
					<li>막 can be used before a marker, but it is very uncommon.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/korean-particles'>Particles:</a><SubList>
					<TableLI><tbody>
						<tr><td>~은/는</td><td>Topic</td></tr>
						<tr><td>~이/가</td><td>Subject</td></tr>
						<tr><td>~을/를</td><td>Object</td></tr>
						<tr><td>~도</td><td>Also</td></tr>
						<tr><td>~에</td><td>Time/Location</td></tr>
						<tr><td>~에서</td><td>Location</td></tr>
						<tr><td>~들</td><td>Plural</td></tr>
						<tr><td>~만</td><td>Only</td></tr>
						<tr><td>~의</td><td>Possessive</td></tr>
						<tr><td>~으로/로</td><td>Direction and multiple other meanings</td></tr>
						<tr><td>~부터</td><td>Start</td></tr>
						<tr><td>~까지</td><td>Until</td></tr>
						<tr><td>~께/에게/한테</td><td>To give someone something</td></tr>
						<tr><td>~께서/에서/한테서</td><td>To receive something from someone</td></tr>
					</tbody></TableLI>
					<li>Korean <b>particles</b> mainly function as markers in a sentence. These words help identify what a certain word's role is in the sentence (whether it's the topic or the object), and it also helps connect words to give a clearer meaning to what you want to say.</li>
					<li>Differences between the <b>subject marker</b> and <b>topic marker</b>:<SubList>
						<li>~은/는 is used to state a general fact. while ~이/가 is used for specific ones.</li>
						<li>~이/가 is used when introducing new information. After the subject has been declared and known to those involved in the conversation (became a topic),  은/는 is often used.</li>
						<li>~이/가 is used to ask a question and ~은/는 is used to answer.</li>
						<li>While you can use the subject particle ~은/는 to describe someone's profession or nationality and the like or describe someone or yourself with an adjective, you cannot use ~이/가  to do the same. Think of ~은/는 as the markers to use with descriptive sentences.</li>
						<li>Similarly, when you want to describe that you or someone else will do something, it's better to use ~이/가 rather than ~은/는. So think of ~이/가 as the subject particles to use with actions.</li>
					</SubList></li>
					<li>~에 can express where you are or were at, where you are going, or where something is, and it can express the time or day something happens.</li>
					<li>~에서, you are stressing the location you are doing or did something in, excluding when the verb of the sentence is 있다, in which case 에 is used. ~에서 can also be used to express "from".</li>
					<TableLI><tbody>
						<tr><td>우리 월요일에 부산에 갈거에요</td><td>We will go to Busan on Monday</td></tr>
						<tr><td>카페에서 숙제를 했어요</td><td>I did my homework in the cafe</td></tr>
						<tr><td>저는 인도네시아에서 왔어요</td><td>I am from Indonesia</td></tr>
					</tbody></TableLI>
					<li>~부터 is to indicate when something starts.</li>
					<li>~까지 typically means "end", more specifically "until", and it works for both time and place. You can also use it to mean "to", often used together with ~에서.</li>
					<TableLI><tbody>
						<tr><td>저는 지난달<b>부터</b> 한국어를 배웠어요</td><td>I started to learn Korean last month.</td></tr>
						<tr><td>집<b>부터</b> 학교<b>까지</b> 걸어 다녀요</td><td>I walk from home to school</td></tr>
						<tr><td>집<b>에서</b> 여기<b>까지</b> 걸어서 왔어요</td><td>I walked until here from home</td></tr>
					</tbody></TableLI>
					<li><b>Linking Particles:</b><SubList>
						<li>~과 (after consonant) / 와 (after vowel) indicate "and" or "with."</li>
						<li>~이랑 (after consonant) / 랑 (after vowel) is nearly identical in use with ~과/와, but it's more casual and more common.</li>
						<li>~하고 is another particle meaning "and" and "with".</li>
						<li>~고 is a connective particle mainly used to connect two actions, happening one after another, into one sentence. You can also use this particle to connect two adjectives describing the same topic or two sentences describing a similar topic into one sentence.</li>
						<TableLI><tbody>
							<tr><td>샤워하<b>고</b> 잠을 잘거에요</td><td>I will take a shower and then go to sleep</td></tr>
							<tr><td>그 사람이 똑똑하<b>고</b> 부지런한 학생이에요</td><td>That person is a smart and diligent student</td></tr>
						</tbody></TableLI>
					</SubList></li>
					<li>The <b>possessive particle</b> ~의 is added or used in sentences to show possession.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={10}>
			<ul><li>can / can't:<SubList>
				<li><b>Can:</b> First get the verb stem, then attach 을 (if it ends in a consonant) or ㄹ (if it ends in a vowel), then add 수 있다.</li>
				<li><b>Can't:</b> First get the verb stem, then attach 을 (if it ends in a consonant) or ㄹ (if it ends in a vowel), then add 수 없다.</li>
				<li>수 = ability; 있다 = to exist; 없다 = to not exist.</li>
				<TableLI>
					<tbody>
						<tr><td>요리하다</td><td>저는 <b>요리할 수 있어</b></td><td>I can cook</td></tr>
						<tr><td>가다</td><td>빌리는 한국에 <b>갈 수 있다</b></td><td>Billy can go to Korea</td></tr>
						<tr><td>가다</td><td>저는 도서관에 <b>갈 수 없어요</b></td><td>I can't go to the library</td></tr>
						<tr><td>만들다</td><td>피자를 <b>만들 수 있어요</b></td><td>I can make pizza</td></tr>
					</tbody>
				</TableLI>
			</SubList></li></ul>
		</div>
	</div>
	<div style={{float: "right",width: "49%",marginRight: "0.5%"}}>
		<h3>Basic Phrases (Part 2)</h3>
		<div data-source={13}>
			<ul>
				<li><a href='https://www.90daykorean.com/im-sorry-in-korean/'>Saying "sorry":</a><SubList>
					<li>죄송합니다 or 미안합니다 (formal)</li>
					<li>죄송해요 or 미안해요 (standard)</li>
					<li>미안해 (informal), 죄송해 isn't used</li>
					<li>Other ways of saying 'sorry':<SubList>
						<li>잠시만요 means "just a moment" or "hold on a second."</li>
						<li>실례합니다 means "excuse me," as in "I am sorry for interrupting".</li>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={10}>
			<ul>
				<li>Saying "I'm sorry to hear that":<SubList>
					<li>To younger people: 어떡해</li>
					<li>To older people: 어떡해요</li>
					<li>The two phrases could mean "What will you (or I) do", and "Oh no".</li>
					<li>Alternative for formal situation: 요검입니다</li>
				</SubList></li>
				<li>Saying "Please":<SubList>
					<li>To ask for something politely, use 주세요, which means "give me".</li>
					<TableLI><tbody>
						<tr><td>파스타를 주세요</td><td>Give me pasta</td></tr>
						<tr><td>샐러드를 주세요</td><td>Give me salad</td></tr>
						<tr><td>음료를 주세요
						</td><td>Give me beverage</td></tr>
					</tbody></TableLI>
					<li><b>조금</b> is an adverb meaning 'a little'.</li>
					<TableLI><tbody><tr><td>한국어를 조금 할 수 있나요</td><td>Can you speak a little korean</td></tr></tbody></TableLI>
					<li><b>좀</b> is an informal, shorter version of 조금</li>
					<li>When used with 주세요, 좀 can make requests sound softer.</li>
					<TableLI><tbody>
						<tr><td>물을 주세요</td><td>Please give me water</td></tr>
						<tr><td>물을 좀 주세요</td><td>(Could you) please give me water</td></tr>
					</tbody></TableLI>
					<li>주세요 comes from the Action verb 주다. The 세요 ending 주세요 is what's known as an <b>honorific ending</b>.</li>
					<li>To close friends who are the same age as you or younger, use <b>줘</b>.</li>
					<TableLI><tbody><tr><td>피자를 줘</td><td>Give me pizza</td></tr></tbody></TableLI>
				</SubList></li>
				<li>Asking Favors:<SubList>
					<li>To make polite requests using different Action Verbs:</li>
					<TableLI><tbody><tr><td>Action Verb stem + (으)세요</td></tr></tbody></TableLI>
					<li>Use 으 if the stem ends in a consonant.</li>
					<TableLI><tbody>
						<tr><td>이메일을 보내세요</td><td>Send an email</td></tr>
						<tr><td>티비를 보세요</td><td>Watch TV</td></tr>
						<tr><td>책을 읽으세쇼</td><td>Read a book</td></tr>
						<tr><td>도서관에 가세요</td><td>Go to the library</td></tr>
					</tbody></TableLI>
					<li>If the verb stem ends in ㄹ, remove it before attaching 세요.</li>
					<TableLI><tbody><tr><td>팔다 (to sell) -&gt; 파세요</td></tr></tbody></TableLI>
					<li>많이 파세요 (Sell a lot) is a way to say goodbye after making a purchase from a shop owner.</li>
					<li>주세요 is a way of telling someone to give something and it comes from 주다 (to give).</li>
					<li>Attaching 주다 to a conjugated Action Verb literally means 'give me <i>the action of you doing that verb</i>'.</li>
					<TableLI><tbody>
						<tr><td>하세요</td><td>Do it (polite)</td></tr>
						<tr><td>해 주세요</td><td>Please do it (more polite)</td></tr>
						<tr><td>피자를 만들어 주세요</td><td>Please make me a pizza</td></tr>
						<tr><td>이것을 봐 주세요</td><td>Please look at this</td></tr>
					</tbody></TableLI>
					<li><b>제발</b> is an adverb that means 'please'. It is only used when begging and is only used at the beginning of the sentence.</li>
					<TableLI><tbody><tr><td>제발 숙제를 해 주세요</td><td>Please do your homework</td></tr></tbody></TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>
</div>

</>