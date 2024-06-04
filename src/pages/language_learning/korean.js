import SubList from "../../articleRelatedStuff/SubList";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "My Korean notes";
export const sourcesColor = {4:null, 10:"#48a7d3", 11:null, 12:null, 13:"#4f94ac", 14:"#c45645"};
export const content = <>
<h1>My Korean Notes</h1> 
{getSourcesOL(sourcesColor)}

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
		<div data-source={14}>
			<ul>
				<li>Sentence structure:<SubList>
					<li>Subject - Object - Verb</li>
					<li>Subject - Adjective</li>
				</SubList></li>
			</ul>
		</div>
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
	<div style={{clear: "both"}}></div>
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

<h2 id="howtostudykorean">howtostudykorean.com (Unit 1)</h2>
<div className="content">
	<div style={{width: "49%", float: "left",marginLeft: "0.5%"}}>
		<h3>Lesson 1 - 4</h3>
		<ul>
			<li>Example sentences provided in these lessons (1 - 4) are not conjugated.</li>
			<li>There is no object in a sentence with an adjective.</li>
			<li>Every Korean sentence and clause must end in a verb, an adjective or 이다. Every verb, every adjective and 이다 end in "다", and these are the only words in Korean that can be conjugated.</li>
			<li>이다 is neither a verb nor an adjective, but it behaves like them. Like adjectives, 이다 can not act on an object. Only verbs can act on objects.</li>
			<li>The translation for 이다 is "to be". We do not use 이다 to indicate that something "is" an adjective.<SubList>
				<li className="Opened">이다 is not used in these types of sentences:<SubList>
					<li>I <u>am</u> pretty</li>
					<li>She <u>is</u> beautiful</li>
					<li>They <u>are</u> hungry</li>
					<li>We <u>are</u> smart</li>
				</SubList></li>
				<li className="Opened">이다 is used in these types of sentences:<SubList>
					<li>I <u>am</u> a man</li>
					<li>He <u>is</u> a man</li>
					<li>They <u>are</u> men</li>
					<li>I <u>was</u> a man</li>
					<li>They <u>were</u> men</li>
				</SubList></li>
				<li>이다 is used to indicate that a noun is a noun.</li>
				<li>The basic structure for a sentence predicated by 이다 is: [noun은/는] [another noun][이다].</li>
				<li>나는 남자이다 (I am a man): Notice that 이다 is attached directly to the second noun. Verbs and adjectives are not attached to nouns like this.</li>
			</SubList></li>
			<li>While "이, 그 and 저" translate to "this, that and that" respectively, and are placed before nouns to indicate "this noun, that noun and that noun," "이것, 그것 and 저것" are nouns (they are pronouns).</li>
			<li>있다:<SubList>
				<li>Has many meanings, but let's focus on "to have" for now. This usage of 있다 in Korean is an <i>adjective</i>.</li>
				<li>You cannot have a word with the particle ~을/를 attached to the word like 나는 펜을 있다 (I have a pen), instead use ~이/가. Example: 나는 펜이 있다 or 나는 차가 있다 (I have a car).</li>
				<li>있다 can also be used to indicate that something/someone is "at a location". When used like this, it is again seen as an adjective.</li>
				<li>~에 particle is used to indicate the place and/or time of something in a sentence.</li>
				<TableLI><tbody>
					<tr><td>나는 학교<b>가</b> 있다</td><td>I have a school</td></tr>
					<tr><td>나는 학교<b>에</b> 있다</td><td>I am at school</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Position words:<SubList>
				<TableLI style={{width: "300px"}}>
					<caption>most common position words</caption>
					<tbody>
						<tr><td>안</td><td>inside</td></tr>
						<tr><td>위</td><td>on top</td></tr>
						<tr><td>밑</td><td>below</td></tr>
						<tr><td>옆</td><td>beside</td></tr>
						<tr><td>뒤</td><td>behind</td></tr>
						<tr><td>앞</td><td>in front</td></tr>
					</tbody>
				</TableLI>
				<li>These words are placed after a noun to indicate where an object is with respect to that noun. The particle "~에" is then attached directly to the position words.</li>
				<TableLI><tbody>
					<tr><td>나는 학교 앞에 있다</td><td>I am in front of the school</td></tr>
					<tr><td>고양이는 의자 밑에 있다</td><td>The cat is under the chair</td></tr>
					<tr><td>나는 은행 안에 있다</td><td> I am inside the bank</td></tr>
					<tr><td>식당은 은행 옆에 있다</td><td>The restaurant is next to the bank</td></tr>
				</tbody></TableLI>
				<li>In cases like this, where the location being described happens to be "inside" of something, "안" can be omitted.</li>
				<TableLI><tbody>
					<tr><td>커피가 냉장고에 있다</td><td>The coffee is in the fridge</td></tr>
					<tr><td>커피가 냉장고 안에 있다</td><td>The coffee is inside the fridge</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Every Korean verb and adjective ends with the syllable 다. Many verbs and adjectives end with the two syllables 하다. 하다 means "do". You can eliminate the 하다 to make the noun form of that verb/adjective.<SubList>
				<TableLI><tbody>
					<tr><td>행복하다</td><td>happy</td><td>행복</td><td>happiness</td></tr>
					<tr><td>성공하다</td><td>succeed</td><td>성공</td><td>success</td></tr>
					<tr><td>말하다</td><td>speak</td><td>말</td><td>speech/words</td></tr>
					<tr><td>성취하다</td><td>achieve</td><td>성취</td><td>achievement</td></tr>
					<tr><td>취득하다</td><td>acquire</td><td>취득</td><td>acquisition</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Verbs/adjectives that end in ~하다 are typically of Chinese origin and have an
				equivalent Hanja (한자) form. Verbs that do not end in ~하다 are of Korean origin and
				do not have a Hanja form.</li>
			<li>"의" is a particle that indicates that one is the owner/possessor of another object:<SubList>
				<TableLI><tbody>
					<tr><td>선생님의 차는 크다</td><td>The teacher's car is big</td></tr>
					<tr><td>그 여자의 눈은 아름답다</td><td>That woman's eyes are beautiful</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Whenever something can be assumed by context, words are often omitted from sentences to make them more simple. For example: 나는 나의 친구를 만나다 ("I meet my friend") -&gt; 나는 친구를 만나다 (I meet (my/a) friend).</li>
			<li>Most of the time, when you deal with a verb/adjective, you eliminate ~다 and add something to the stem. When you want to make an adjective that can describe a noun (like "small boy" and "big boat"), you must eliminate ~다 and add ~ㄴ or ~은 to the stem of the adjective.<SubList>
				<li>Words in which the last syllable of the stem ends in a vowel you add ~ㄴ to the last syllable.</li>
				<TableLI><tbody>
					<tr><td>크다</td><td>큰 배</td><td>Big boat</td></tr>
					<tr><td>비싸다</td><td>비싼 음식</td><td>Expensive food</td></tr>
					<tr><td>싸다</td><td>싼 것</td><td>Cheap thing</td></tr>
					<tr><td>작다</td><td>작은 남자</td><td>Small man</td></tr>
					<tr><td>좋다</td><td>좋은 아들</td><td>Good son</td></tr>
					<tr><td>많다</td><td>많은 돈</td><td>A lot of money</td></tr>
				</tbody></TableLI>
				<li>The key to understanding this is being able to understand the difference between the following:</li>
				<TableLI><tbody>
					<tr><td>음식은 비싸다</td><td>The food is expensive</td></tr>
					<tr><td>비싼 음식</td><td>expensive food</td></tr>
				</tbody></TableLI>
				<li>When an adjective ends in "~있다" like this, instead of attaching ~ㄴ/은 to the stem, you must attach ~는 to the stem.</li>
				<TableLI><tbody>
					<tr><td>그 남자는 재미있는 남자이다</td><td>That man is a funny man</td></tr>
					<tr><td>나는 맛있는 음식을 먹다</td><td>I eat delicious food</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>~도:<SubList>
					<li>It has the meaning of "too/as well".
				It can replace the subject particles (는/은) OR the object particles (를/을), depending on
				what you are saying "too" with.</li>
					<TableLI><tbody>
						<tr><td>저도 한국어를 말하다</td><td>I too speak Korean</td></tr>
						<tr><td>저는 한국어도 말하다</td><td>I speak Korean as well</td></tr>
					</tbody></TableLI>
			</SubList></li>
		</ul>
		<h3>Lesson 5 - 8</h3>
		<ul>
			<li>When ~가 is attached 나 changes to 내, and 저 changes to 제. For
				example: 내가, 제가.</li>
			<li>When conjugating, if the last vowel in the stem is ㅏ or ㅗ, you must add 아 plus whatever you
				are adding. If the last vowel is anything other than ㅏ or ㅗ, you must add 어 plus
				whatever you are adding. If the syllable of the stem is 하, you add 하여 which can be
				shortened to 해.</li>
			<li>Verb tense conjugation:<SubList>
				<li><u>Present Tense Conjugation:</u><SubList>
					<li>Add ~는다 (if consonant before) or ~ㄴ다 (if vowel before).</li>
					<TableLI><tbody>
						<tr><td>나는 밥을 먹는다</td><td>I eat rice</td></tr>
						<tr><td>나는 그것을 이해한다</td><td>I understand that</td></tr>
						<tr><td>나는 문을 닫는다</td><td>I close the door</td></tr>
					</tbody></TableLI>
					<li><u>Informal low:</u> All you need to do is add ~어/아/여 to the stem of the verb.</li>
					<li><u>Informal high:</u> This is done the exact same way as 'Informal low respect' but you also add '~요' to the end of the word.</li>
					<li><u>Formal high:</u> If a word stem ends in a vowel, you add ~ㅂ니다. If a word stem ends in a
						consonant, you add ~습니다 to the word stem.</li>
					<TableLI><tbody>
						<tr><td>나는 항상 저녁에 음식을 먹어<br/>저는 항상 저녁에 음식을 먹어요<br/>저는 항상 저녁에 음식을 먹습니다</td><td>I always eat food in the evening</td></tr>
						<tr><td>나는 너의 선생님을 항상 봐<br/>저는 저의 선생님을 항상 봐요<br/>저는 저의 선생님을 봅니다</td><td>I always see my teacher</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>When conjugating to the <u>past tense</u>, we need to add ~았/었다 to the stem of a word (or 였다 in the case of 하다):<SubList>
					<TableLI><tbody>
						<tr><td>나는 밥을 먹었다</td><td>I ate rice</td></tr>
						<tr><td>나는 문을 닫았다</td><td>I closed the door</td></tr>
						<tr><td>나는 한국어를 공부하였다 </td><td>I studied Korean</td></tr>
					</tbody></TableLI>
					<li>Verbs that have a last syllable that end in
						a vowel (including 하다), the ~았다/었다 gets merged to the actual stem itself</li>
					<TableLI><tbody>
						<tr><td>가다</td><td>나는 박물관에 갔다</td><td>I went to the museum</td></tr>
						<tr><td>오다</td><td>삼촌은 가게에 왔다</td><td>(My) uncle came to the store</td></tr>
						<tr><td>던지다</td><td>나는 공을 던졌다</td><td>I threw the ball</td></tr>
						<tr><td>건너다</td><td>나는 길을 건넜다</td><td>I crossed the street</td></tr>
						<tr><td>만나다</td><td>나는 친구를 만났다</td><td>I met friends</td></tr>
						<tr><td>공부하다</td><td>나는 한국어를 공부했다</td><td>I studied Korean</td></tr>
					</tbody></TableLI>
					<li><u>Informal low:</u> Add 었어/았어/였어.</li>
					<li><u>Informal high:</u> Just add 요 to the end of the Informal low respect conjugations.</li>
					<li><u>Formal high:</u> After adding 었/았/였, add 습니다.</li>
					<TableLI><tbody>
						<tr><td>나는 먹었어<br/>저는 먹었어요<br/>저는 먹었습니다</td><td>I ate</td></tr>
						<tr><td>나는 들어봤어<br/>저는 들어봤어요<br/>저는 들어봤습니다</td><td>I listened</td></tr>
						<tr><td>나는 운동했어<br/>저는 운동했어요<br/>저는 운동했습니다</td><td>I exercised</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>For <u>future tense</u>:<SubList>
					<li>Simply a matter of adding ~겠다 to the stem of a word. Example: 나는 먹겠다 (I will eat) and 나는 가겠다 (I will go).</li>
					<li><u>Informal low:</u> Add 겠어.</li>
					<li><u>Informal high:</u> Just add 요 to the end of the Informal low respect conjugations.</li>
					<li><u>Formal high:</u> Add 겠습니다.</li>
					<TableLI><tbody>
						<tr><td>나는 먹겠어<br/>저는 먹겠어요<br/>저는 먹겠습니다</td><td>I will eat</td></tr>
						<tr><td>나는 배우겠어<br/>저는 배우겠어요<br/>저는 배우겠습니다</td><td>I will learn</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<TableLI>
					<caption>먹다 conjugation from verbix.com</caption>
					<thead><tr><th></th><th>Past</th><th>Present</th><th>Future</th></tr></thead>
					<tbody>
						<tr><th>Informal Low</th><td>먹었어</td><td>먹어</td><td>먹겠어</td></tr>
						<tr><th>Informal High</th><td>먹었어요</td><td>먹어요</td><td>먹겠어요</td></tr>
						<tr><th>Formal Low</th><td>먹었다</td><td>먹는다</td><td>먹겠다</td></tr>
						<tr><th>Formal High</th><td>먹었습니다</td><td>먹습니다</td><td>먹겠습니다</td></tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Adjective tense conguation:<SubList>
				<li>For <u>present tense</u>, you don't need to do anything!</li>
				<TableLI><tbody>
					<tr><td>그 선생님은 아름답다</td><td>that teacher is beautiful</td></tr>
					<tr><td>그 길은 길다</td><td>that street is long</td></tr>
					<tr><td>나의 손은 크다</td><td>my hand is big</td></tr>
				</tbody></TableLI>
				<li>For <u>past tense</u>, you must follow the same rule as verbs.</li>
				<TableLI><tbody>
					<tr><td>그 길은 길었다</td><td>That street was long</td></tr>
					<tr><td>그 음식은 맛있었다</td><td>That food was delicious</td></tr>
					<tr><td>그 선생님은 좋았다</td><td>That teacher was good</td></tr>
				</tbody></TableLI>
				<li>If the final letter of a verb/adjective stem is a vowel, 았다/었다 is merged
					to the actual stem itself.</li>
					<TableLI><tbody>
						<tr><td>이것은 비쌌다</td><td>This was expensive</td></tr>
						<tr><td>그 남자는 잘생겼다</td><td>That man was handsome</td></tr>
						<tr><td>그 사람은 뚱뚱했다</td><td>That person was fat</td></tr>
					</tbody></TableLI>
				<li>For <u>future tense</u>, add 겠다 to the stem of the adjective.</li>
				<TableLI><tbody>
					<tr><td>나는 행복하겠다</td><td>I will be happy</td></tr>
					<tr><td>그것은 맛있겠다</td><td>That thing will be delicious</td></tr>
					<tr><td>나는 배고프겠다</td><td>I will be hungry</td></tr>
				</tbody></TableLI>
				<li>Thankfully, adjectives are conjugated the exact same way as verbs when conjugating
					with these three honorific endings.</li>
				<TableLI>
					<caption>비싸다 conjugation</caption>
					<thead><tr>
							<th></th>
							<th>Past</th>
							<th>Present</th>
							<th>Future</th>
					</tr></thead>
					<tbody>
					<tr>
						<th>Informal low</th>
						<td>비쌌어</td>
						<td>비싸</td>
						<td>비싸겠어</td>
					</tr>
					<tr>
						<th>Informal high</th>
						<td>비쌌어요</td>
						<td>비싸요</td>
						<td>비싸겠어요</td>
					</tr>
					<tr>
						<th>Plain form</th>
						<td>비쌌다</td>
						<td>비싸다</td>
						<td>비싸겠다</td>
					</tr>
					<tr>
						<th>Formal high</th>
						<td>비쌌습니다</td>
						<td>비쌉니다</td>
						<td>비싸겠습니다</td>
					</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>ㅅ Irregular:<SubList>
				<li>If the last letter of a word stem ends in ㅅ, the ㅅ gets removed when adding a vowel.</li>
				<TableLI>
					<caption>Conjugation Of 짓다</caption>
					<thead>
						<tr>
							<th></th>
							<th>Past</th>
							<th>Present</th>
							<th>Future</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Informal low</td>
							<td>지었어</td>
							<td>지어</td>
							<td>짓겠어</td>
						</tr>
						<tr>
							<td>Informal high</td>
							<td>지었어요</td>
							<td>지어요</td>
							<td>짓겠어요</td>
						</tr>
						<tr>
							<td>Plain form</td>
							<td>지었다</td>
							<td>짓는다</td>
							<td>짓겠다</td>
						</tr>
						<tr>
							<td>Formal high</td>
							<td>지었습니다</td>
							<td>짓습니다</td>
							<td>짓겠습니다</td>
						</tr>
					</tbody>
				</TableLI>
				<li>Common Exception:<SubList>
					<li><b>웃다 (to laugh):</b> 저는 웃었어요 = I laughed</li>
					<li><b>벗다 (to take off clothes):</b> 저는 저의 옷을 벗었어요 = I took off my clothes</li>
					<li><b>씻다 (to wash):</b> 저는 저의 손을 씻었어요 = I washed my hands</li>
				</SubList></li>
			</SubList></li>
			<li>ㄷ Irregular:<SubList>
				<li>If the last letter of a word stem ends in ㄷ (걷다 = to walk), the ㄷ gets changed to ㄹ
					when adding a vowel. This is only done with verbs.</li>
				<TableLI>
					<caption>Conjugation Of 걷다</caption>
					<thead>
						<tr>
							<th></th>
							<th>Past</th>
							<th>Present</th>
							<th>Future</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Informal low</td>
							<td>걸었어</td>
							<td>걸어</td>
							<td>걷겠어</td>
						</tr>
						<tr>
							<td>Informal high</td>
							<td>걸었어요</td>
							<td>걸어요</td>
							<td>걷겠어요</td>
						</tr>
						<tr>
							<td>Plain form</td>
							<td>걸었다</td>
							<td>걷는다</td>
							<td>걷겠다</td>
						</tr>
						<tr>
							<td>Formal high</td>
							<td>걸었습니다</td>
							<td>걷습니다</td>
							<td>걷겠습니다</td>
						</tr>
					</tbody>
				</TableLI>
				<li>Common Exceptions:<SubList>
					<li><b>받다 (to get/receive):</b> 저는 돈을 받았어요 = I received money</li>
					<li><b>묻다 (to bury):</b> 저는 저의 강아지를 묻었어요 = I buried my dog</li>
					<li><b>닫다 (to close):</b> 저는 문을 닫았어요 = I closed the door</li>
				</SubList></li>
			</SubList></li>
			<li>ㅂ Irregular:<SubList>
				<li>If the last letter of a word stem ends in ㅂ (쉽다 = easy), the ㅂ changes to 우 when
					adding a vowel. 우 then gets added to the next syllable in the conjugated word.</li>
				<li>This is mostly done with adjectives. Many verbs end with ㅂ but this rule is rarely
					applied to verbs.</li>
				<TableLI>
					<caption>Conjugation Of 춥다 (Cold)</caption>
					<thead>
						<tr>
							<th></th>
							<th>Past</th>
							<th>Present</th>
							<th>Future</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Informal low</td>
							<td>추웠어</td>
							<td>추워</td>
							<td>춥겠어</td>
						</tr>
						<tr>
							<td>Informal high</td>
							<td>추웠어요</td>
							<td>추워요</td>
							<td>춥겠어요</td>
						</tr>
						<tr>
							<td>Plain form</td>
							<td>추웠다</td>
							<td>춥다</td>
							<td>춥겠다</td>
						</tr>
						<tr>
							<td>Formal high</td>
							<td>추웠습니다</td>
							<td>춥습니다</td>
							<td>춥겠습니다</td>
						</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>ㅡ Irregular:<SubList>
				<li>If the final vowel in a stem is ㅡ (for example: 잠그다 = to lock), when adding ~아/어, you must look at the vowel in the second last syllable. For example, in the word
					"잠그다", the second last syllable in the stem is "잠", and the vowel here is ㅏ. Therefore, we add ~아 to 잠그 (잠그아).</li>
				<li>In cases like this where a word ends in "ㅡ" (that is, there is no final consonant after
					"ㅡ") and is followed by ~아/어 (or any of its derivatives), the ~아/어~ the "ㅡ" is
					eliminated and the addition of ~아/어~ merges to the stem.</li>
				<li><b>예쁘다 = pretty:</b>
					The last vowel in the stem is ㅡ. The vowel in the second last syllable is not ㅏ or ㅗ, so
					we add 어. 예뻐 그 여자는 예뻐요 = That girl is pretty.</li>
				<li><b>크다 = to be big:</b>
					The last vowel in the stem is ㅡ. 크 is the only syllable in the stem, so we add 어. 그 집은 커요 = That house is big.</li>
				<li><b>긁다 = to scratch:</b>
					The last vowel in the stem is ㅡ. 긁 is the only syllable in the stem, so we add 어.
					Because there is a final consonant after "ㅡ", ~어 does not merge to the stem.
					저는 머리를 긁었어요 = I scratched my head.</li>
				<TableLI>
					<caption>Conjugation Of 잠그다</caption>
					<thead>
						<tr>
							<th></th>
							<th>Past</th>
							<th>Present</th>
							<th>Future</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Informal low</td>
							<td>잠갔어</td>
							<td>잠가</td>
							<td>잠그겠어</td>
						</tr>
						<tr>
							<td>Informal high</td>
							<td>잠갔어요</td>
							<td>잠가요</td>
							<td>잠그겠어요</td>
						</tr>
						<tr>
							<td>Plain form</td>
							<td>잠갔다</td>
							<td>잠근다</td>
							<td>잠그겠다</td>
						</tr>
						<tr>
							<td>Formal high</td>
							<td>잠갔습니다</td>
							<td>잠급니다</td>
							<td>잠그겠습니다</td>
						</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Anytime you put a word in a sentence that indicates when or where something is taking
				place, you must add the particle 에 to the end of that word:<SubList>
					<TableLI><tbody>
						<tr><td>저는 병원을 지었어요</td><td>I built a hospital</td></tr>
						<tr><td>저는 병원에 갔어요</td><td>I went to the/a hospital</td></tr>
						<tr><td>저는 병원을 공원 옆에 지었어요</td><td>I built a hospital beside the park</td></tr>
						<tr><td>저는 화요일에 가겠어요</td><td>I will go on Tuesday</td></tr>
						<tr><td>저는 저녁에 공부했어요</td><td>I studied in the evening</td></tr>
						<tr><td>저는 가을에 공원 옆에 병원을 지었어요</td><td>I built a hospital beside the park in the fall</td></tr>
					</tbody></TableLI>
					<li>Korean people don't add ~에 when using 오늘 (today), 내일 (tomorrow) and 어제 (yesterday):<SubList>
						<TableLI><tbody>
						<tr><td>저는 한국에 오늘 도착했어요</td><td>I arrived in Korea today</td></tr>
						<tr><td>저는 도서관에 어제 갔어요</td><td>I went to the library yesterday</td></tr>
						<tr><td>저는 내일 한국어를 공부하겠어요</td><td>I will study Korean tomorrow</td></tr>
						</tbody></TableLI>
					</SubList></li>
			</SubList></li>
				<li>A lot of adverbs in Korean are simply made by adding 게 to the stem of an adjective:<SubList>
				<TableLI>
					<thead>
						<tr>
							<th colSpan="2">Adjective</th>
							<th colSpan="2">Adverb</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>쉽다</td><td>easy</td>
							<td>쉽게</td><td>easily</td>
						</tr>
						<tr>
							<td>비슷하다</td><td>similar</td>
							<td>비슷하게</td><td>similarly</td>
						</tr>
						<tr>
							<td>다르다</td><td>different</td>
							<td>다르게</td><td>differently</td>
						</tr>
					</tbody>
				</TableLI>
				<li>Adjectives that end in 하다 are sometimes changed into adverbs by changing 하다 to 히.
					With most 하다 adjectives you can either add 게 to the stem or 히 with no difference in
					meaning.</li>
				<TableLI>
					<thead>
						<tr>
							<th colSpan="2">Adjective</th>
							<th colSpan="2">Adverb</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>조용하다</td><td>quiet</td>
							<td>조용하게/조용히</td><td>quietly</td>
						</tr>
						<tr>
							<td>안전하다</td><td>safe</td>
							<td>안전하게/안전히</td><td>safely</td>
						</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Some adjectives are changed into adverbs in a different way. When this happens,
				they are usually very similar to their original adjective form:</li>
			<TableLI>
				<thead>
					<tr>
						<th colSpan="2">Adjective</th>
						<th colSpan="2">Adverb</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>많다</td><td>many</td>
						<td>많이</td><td>many/a lot*</td>
					</tr>
					<tr>
						<td>빠르다</td><td>quick/fast</td>
						<td>빨리</td><td>quickly</td>
					</tr>
				</tbody>
			</TableLI>
			<li>There are two ways you can make a sentence negative:<SubList>
				<li>By adding 안, which acts as an adverb in the sentence. 안 is typically placed
					immediately before the final verb or adjective.</li>
				<TableLI><tbody>
					<tr><td>그 여자는 안 예뻐요</td><td>That girl isn't pretty</td></tr>
					<tr><td>저는 생선을 안 좋아해요</td><td>I don't like fish</td></tr>
					<tr><td>저는 내일 학교에 안 가겠어요</td><td>I'm not going to school tomorrow</td></tr>
				</tbody></TableLI>
				<li>By adding ~지 않다 to the stem of the final verb or adjective. 않다 then becomes the
					verb or adjective in that sentence and must be conjugated accordingly.</li>
				<TableLI><tbody>
					<tr><td>그 여자는 예쁘지 않아요</td><td>That girl isn't pretty</td></tr>
					<tr><td>저는 생선을 좋아하지 않아요</td><td>I don't like fish</td></tr>
					<tr><td>저는 내일 학교에 가지 않겠어요</td><td>I'm not going to school tomorrow</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>When indicating that one "does not do" a ~하다 verb:<SubList>
				<li>It is common to separate ~하다
					from the noun and place "안" in between them.</li>
				<TableLI><tbody>
					<tr><td>저는 공부를 안 했어요</td><td>I didn't study</td></tr>
					<tr><td>저는 실수를 안 했어요</td><td>I didn't make a mistake</td></tr>
					<tr><td>저는 여행을 안 했어요</td><td>I didn't travel</td></tr>
				</tbody></TableLI>
				<li>It would also be appropriate to use the ~지 않다 form with these words. However, in
					these cases, it doesn't matter if the noun is separated from ~하다 or not.</li>
				<TableLI><tbody>
					<tr><td>저는 공부하지 않았어요<br/>저는 공부를 하지 않았어요</td><td>I didn't study</td></tr>
					<tr><td>저는 실수하지 않았어요<br/>저는 실수를 하지 않았어요</td><td>I didn't make a mistake</td></tr>
					<tr><td>저는 여행하지 않았어요<br/>저는 여행을 하지 않았어요</td><td>I didn't travel</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Many adjectives end in ~하다. It is unnatural to remove the ~하다 in these words and place "안" between them. You can't separate an adjective and "act" on it with ~하다 because they are adjectives. However, you could use ~지 않다 on a -하다 adjective or place "안" before the verb:<SubList>
				<TableLI><tbody>
					<tr><td>저는 안 행복해요</td><td>I am not happy</td></tr>
					<tr><td>저는 행복하지 않아요</td><td>I am not happy</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>아니다:<SubList>
				<li>Opposite of the word 이다 (to be), but they are used a little bit
					differently. However, when using 아니다, the particle ~이/가 is attached to the noun, and 아니다 is
					used as a separate word.</li>
				<TableLI><tbody>
					<tr><td>나는 선생님이다</td><td>I am a teacher</td></tr>
					<tr><td>나는 대학생이다</td><td>I am a university student</td></tr>
					<tr><td>나는 선생님이 아니다</td><td>I am not a teacher</td></tr>
					<tr><td>나는 대학생이 아니다</td><td>I am not a university student</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>없다:<SubList>
				<li>없다 is the opposite of 있다.</li>
				<TableLI><tbody>
					<tr><td>저는 돈이 있다</td><td>I have money</td></tr>
					<tr><td>저는 학교 안에 있어요</td><td>I am inside the school</td></tr>
					<tr><td>저는 돈이 없어요</td><td>I don't have money</td></tr>
					<tr><td>저는 시간이 없어요</td><td>I don't have time</td></tr>
					<tr><td>저의 친구는 지금 한국에 없어요</td><td>My friend is not in Korea now</td></tr>
					<tr><td>사람이 없었어요</td><td>There was no people</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>싫어하다 and 싫다:<SubList>
				<li>"싫어하다" is a verb and the
					opposite of 좋아하다 (to like).</li>
				<TableLI><tbody>
					<tr><td>저는 과일을 싫어해요</td><td>I dislike fruit</td></tr>
					<tr><td>저는 과일을 좋아해요</td><td>I like fruit</td></tr>
				</tbody></TableLI>
				<li>좋다 is
					an adjective (meaning "to be good"), and thus cannot act on an object.</li>
				<li>The adjective form of 싫어하다 is 싫다. 싫다 is not used to mean "to not be good". In order to indicate that something is "not
					good" (i.e. "bad"), the adjective 나쁘다 is commonly used. Instead, 싫다 is often used to
					indicate that one dislikes something.</li>
				<TableLI><tbody>
					<tr><td>저는 과일이 싫어요</td><td>I dislike fruit</td></tr>
				</tbody></TableLI>
				<li>Notice that because 싫다 is an adjective, it cannot act on an object, so the particles
					~이/가 are attached to the noun.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", float: "right", marginRight: "0.5%"}}>
		<h3>Lesson 9 - 16</h3>
		<ul>
			<li>Conjugating <b>이다</b>:<SubList>
				<li>Present tense:<SubList>
					<li><u>Informal Low Respect:</u> Add ~이야 to a word ending in a consonant, or ~(이)야 to a word ending in a vowel. When conjugating "아니다" in this respect, you simply add "~야" to "아니다".</li>
					<li><u>Informal High Respect:</u> Add ~이에요 to a word ending in a consonant, or ~예요 to a word ending in a vowel. When conjugating "아니다" in this respect, you simply add ~에요 to 아니다.</li>
					<li><u>Formal High Respect:</u> Add ~입니다 (~이 + ~ㅂ니다) to words ending in a vowel or consonant. With words ending in vowels, you can eliminate ~이 and attach ~ㅂ니다 directly to the word. When conjugating 아니다 in this respect, you must add ~ㅂ니다 directly to 아니다.</li>
					<TableLI><tbody>
						<tr><th rowSpan="5">Informal Low Respect</th><td>나는 좋은 학생이야</td><td>I am a good student</td></tr>
						<tr><td>이것은 여권이야</td><td>This is a passport</td></tr>
						<tr><td>그것은 사과야</td><td>That thing is an apple</td></tr>
						<tr><td>그것은 책이야</td><td>That thing is a book</td></tr>
						<tr><td>그것은 책이 아니야</td><td>That thing is not a book</td></tr>
						<tr><th rowSpan="6">Informal High Respect</th><td>저는 좋은 학생이에요</td><td>I am a good student</td></tr>
						<tr><td>저는 선생님이에요</td><td>I am a teacher</td></tr>
						<tr><td>그것은 사진이에요</td><td>That thing is a picture</td></tr>
						<tr><td>저것은 사과예요</td><td>That thing is an apple</td></tr>
						<tr><td>이 사람은 저의 누나예요</td><td>This (person) is my sister</td></tr>
						<tr><td>저는 학생이 아니에요</td><td>I am not a student</td></tr>
						<tr><th rowSpan="7">Formal High Respect</th><td>저는 의사입니다</td><td>I am a doctor</td></tr>
						<tr><td>저는 의사가 아닙니다</td><td>I am not a doctor</td></tr>
						<tr><td>저는 좋은 학생입니다</td><td>I am a good student</td></tr>
						<tr><td>저는 학생이 아닙니다</td><td>I am not a student</td></tr>
						<tr><td>저는 선생님입니다</td><td>I am a teacher</td></tr>
						<tr><td>그 사람은 저의 형입니다</td><td>That person is my brother</td></tr>
						<tr><td>그것은 저의 직업이 아닙니다</td><td>That (thing) is not my job</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Past tense:<SubList>
					<TableLI><tbody>
						<tr><th rowSpan="5">Informal Low Respect</th><td>나는 바쁜 선생님이었어</td><td>I was a busy teacher</td></tr>
						<tr><td>나는 학생이었어</td><td>I was a student</td></tr>
						<tr><td>나는 선생님이었어</td><td>I was a teacher</td></tr>
						<tr><td>나는 나쁜 애기였어</td><td>I was a bad baby</td></tr>
						<tr><td>나는 나쁜 의사였어</td><td>I was a bad doctor</td></tr>
						<tr><th rowSpan="4">Informal High Respect</th><td>그것은 큰 비밀이었어요</td><td>That was a big secret</td></tr>
						<tr><td>저는 선생님이었어요</td><td>I was a teacher</td></tr>
						<tr><td>저는 의사였어요</td><td>I was a doctor</td></tr>
						<tr><td>저는 나쁜 애기였어요</td><td>I was a bad baby</td></tr>
						<tr><th rowSpan="2">Plain Form</th><td>나는 선생님이었다</td><td>I was a teacher</td></tr>
						<tr><td>나는 의사였다</td><td>I was a doctor</td></tr>
						<tr><th rowSpan="2">Formal High Respect</th><td>저는 선생님이었습니다</td><td>I was a teacher</td></tr>
						<tr><td>저는 의사였습니다</td><td>I was a doctor</td></tr>
					</tbody></TableLI>
					<li>In all situations in the past tense, 아니다 is conjugated just like any other word.</li>
					<TableLI><tbody>
						<tr><td>나는 학생이 아니었어</td></tr>
						<tr><td>나는 학생이 아니었다</td></tr>
						<tr><td>저는 학생이 아니었어요</td></tr>
						<tr><td>저는 학생이 아니었습니다</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Future tense:<SubList>
					<li>For verbs or adjectives, when conjugating into the future tense, you must first add ~ㄹ/을 to the stem of the word.</li>
					<li>Adding ~ㄹ/을 to the stem of an adjective or verb changes it to a word that can describe a noun in the future tense.</li>
					<TableLI><tbody>
						<tr><td>행복한 사람</td><td>happy person</td></tr>
						<tr><td>행복할 사람</td><td>a person that will be happy</td></tr>
					</tbody></TableLI>
					<li>These newly formed words must be followed by a noun. You cannot end a sentence like this: 나는 좋은, instead, a noun must follow: 나는 좋은 사람. Now, to end the sentence, you need to add 이다 to the noun: 나는 좋은 사람이다.</li>
					<TableLI><tbody>
						<tr><td>나는 행복할 것이다</td><td>I am a thing who will be happy</td></tr>
						<tr><td>나는 먹을 것이다</td><td>I am a thing who will eat</td></tr>
						<tr><td>나는 공부할 것이다</td><td>I am a thing who will study</td></tr>
					</tbody></TableLI>
					<li>The 이다 can then be conjugated based on the level of politeness or formality. But keep in mind that even though this sentence is conjugated into the future, the 이다 should stay in the present tense.</li>
					<li>것 is also sometimes shortened to 거, for no other reason than it is easier to say and creates a shorter sentence.</li>
					<TableLI><tbody>
						<tr><td>저는 밥을 먹을 것이에요</td><td>I will eat rice</td></tr>
						<tr><td>저는 밥을 먹을 거예요</td><td>I will eat rice</td></tr>
						<tr><td>나는 내일 친구를 만날 것이야</td><td>I will meet my friend tomorrow</td></tr>
						<tr><td>나는 내일 친구를 만날 거야</td><td>I will meet my friend tomorrow</td></tr>
					</tbody></TableLI>
				</SubList></li>
			</SubList></li>
			<li><b>되다</b> introduction:<SubList>
				<li>Has many meanings but the first meaning of '되다' is "to become".</li>
				<TableLI><tbody>
					<tr><td>저는 선생님이 되었어요</td><td>I became a teacher</td></tr>
					<tr><td>저는 선생님이었어요</td><td>I was a teacher</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Numbers in Korean:<SubList>
				<li className="Opened">The <b>Sino-Korean</b> numbers are used in limited situations:<SubList>
					<li>When counting/dealing with money</li>
					<li>When measuring</li>
					<li>When doing math</li>
					<li>In phone-numbers</li>
					<li>When talking about/counting time in any way except the hour</li>
					<li>The names of each month</li>
					<li>Counting months (there is another way to count months using pure Korean numbers)</li>
				</SubList></li>
				<li className="Opened">The <b>pure Korean numbers</b> are used when:<SubList>
					<li>You are counting things/people/actions</li>
					<li>Talking about the hour in time</li>
					<li>Sometimes used when talking about months</li>
				</SubList></li>
				<li>After 60, regardless of what you are doing, pure Korean numbers are rarely used.</li>
				<TableLI>
					<thead><tr><th>Pure Korean</th><th>Sino-Korean</th><th>English</th></tr></thead>
					<tbody>
						<tr><td>하나</td><td>일</td><td>One</td></tr>
						<tr><td>둘</td><td>이</td><td>Two</td></tr>
						<tr><td>셋</td><td>삼</td><td>Three</td></tr>
						<tr><td>넷</td><td>사</td><td>Four</td></tr>
						<tr><td>다섯</td><td>오</td><td>Five</td></tr>
						<tr><td>여섯</td><td>육</td><td>Six</td></tr>
						<tr><td>일곱</td><td>칠</td><td>Seven</td></tr>
						<tr><td>여덟</td><td>팔</td><td>Eight</td></tr>
						<tr><td>아홉</td><td>구</td><td>Nine</td></tr>
						<tr><td>열</td><td>십</td><td>Ten</td></tr>
						<tr><td>열하나</td><td>십일</td><td>Eleven</td></tr>
						<tr><td>스물</td><td>이십</td><td>Twenty</td></tr>
						<tr><td>스물하나</td><td>이십일</td><td>Twenty One</td></tr>
						<tr><td></td><td>팩</td><td>One Hundred</td></tr>
						<tr><td></td><td>전</td><td>One Thousand</td></tr>
						<tr><td></td><td>만</td><td>Ten Thousand</td></tr>
					</tbody>
				</TableLI>
				<li>Saying Zero:<SubList>
					<li>Two ways of saying zero, both of which are of Chinese origin.</li>
					<li>영 - Use this when:<SubList>
						<li>Points that can be given or taken away, like in a game.</li>
						<li>Temperature.</li>
						<li>using numbers in math.</li>
					</SubList></li>
					<li>공 - Use this when talking about phone numbers.</li>
				</SubList></li>
			</SubList></li>
			<li>Counters in Korean:<SubList>
				<li>When counting most things in Korean, you need to also include a 'counter'.</li>
				<TableLI><tbody>
					<tr><td>개</td><td>counter for things</td></tr>
					<tr><td>명</td><td>counter for people</td></tr>
					<tr><td>번</td><td>counter for behaviors/actions</td></tr>
				</tbody></TableLI>
				<li>There are many more counters, but if you can't remember the specific counter of something, you can usually substitute "개" (the counter for "thing") instead.</li>
				<li>The words 1, 2, 3, 4 and 20 change when adding a counter.</li>
				<TableLI><tbody>
					<tr><td>하나 -&gt; 한</td><td>사람 한 명</td><td>1 person</td></tr>
					<tr><td>둘 -&gt; 두</td><td>사람 두 명</td><td>2 people</td></tr>
					<tr><td>셋 -&gt; 세</td><td></td></tr>
					<tr><td>넷 -&gt; 네</td><td>펜 마흔네 개</td><td>44 pens</td></tr>
					<tr><td>스물 -&gt; 스무</td><td></td></tr>
				</tbody></TableLI>
				<li>When placed before the noun, ~의 is added to the counter</li>
				<TableLI><tbody>
					<tr><td>나는 펜 네 개를 샀어</td><td>나는 네 개의 펜을 샀어</td><td>I bought four pens</td></tr>
					<tr><td>나는 햄버거 두 개를 먹었어</td><td>나는 두 개의 햄버거를 먹었어</td><td>I ate two hamburgers</td></tr>
					<tr><td>나는 어제 친구 다섯 명을 만났어</td><td>나는 어제 다섯 명의 친구를 만났어</td><td>I met five friends yesterday</td></tr>
				</tbody></TableLI>
				<li>번 is a common counter that counts behavior or actions, and is not directly counted with a noun in a sentence. Putting a number before 번 creates an adverb that tells you how many times something was done.</li>
				<TableLI><tbody>
					<tr><td>저는 어제 학교에 세 번 갔어요</td><td>I went to school three times yesterday</td></tr>
					<tr><td>저는 그 영화를 다섯 번 봤어요</td><td>I saw that movie five times</td></tr>
					<tr><td>저는 오늘 두 번 운동할 것입니다</td><td>I will exercise twice (two times) today</td></tr>
					<tr><td>저는 어제 고기를 두 번 먹었어요</td><td>I ate meat twice yesterday</td></tr>
					<tr><td>저는 오늘 축구를 네 번 할 거예요</td><td>I will  soccer four times today</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Telling the time:<SubList>
				<li>When talking about the hour, as in '2 o'clock' all you need to do is put 시 after a number.</li>
				<li>When talking about the minute, add 분 after the number.</li>
				<li>The pure Korean numbers are used when saying the hour number, whereas the Sino-Korean numbers are used when saying the minute number.</li>
				<TableLI><tbody>
					<tr><td>두 시 삼십 분</td><td>Two thirty</td></tr>
					<tr><td>세 시 십 분</td><td>Three ten</td></tr>
					<tr><td>열두 시 오십 분</td><td>Twelve fifty</td></tr>
				</tbody></TableLI>
				<li>These times can go in a sentence as usual by adding 에 to indicate a time.</li>
				<TableLI><tbody>
					<tr><td>우리는 야구를 1시에 할 거예요</td><td>We will play baseball at 1:00</td></tr>
					<tr><td>우리는 7시 20분에 시작할 거예요</td><td>We will start at 7:20</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Telling the age:<SubList>
				<li>When indicating how old a person is, you should use pure Korean numbers along with the word 살 which is a counter for ages.</li>
				<TableLI><tbody>
					<tr><td>저는 열 살이에요</td><td>I am ten years old</td></tr>
				</tbody></TableLI>
				<li>It would sound weird to use the Sino-Korean numbers to indicate the age of somebody who is under thirty. However, after thirty, it is not uncommon to use the Sino-Korean numbers.</li>
			</SubList></li>
			<li>Ordinal Numbers:<SubList>
				<li>번째 can be used after a number like a counter to mean first, second, third, etc. When saying first, 첫 replaces 한.</li>
				<TableLI><tbody>
					<tr><td>저의 <b>첫 번째</b> 친구는 착했어요</td><td>My first friend was nice</td></tr>
					<tr><td>그 <b>두 번째</b> 선생님은 똑똑했어요</td><td>That second teacher was smart</td></tr>
					<tr><td>이 여권은 저의 <b>세 번째</b> 여권이에요</td><td>This passport is my third passport</td></tr>
					<tr><td>저는 <b>네 번째</b> 사람이었어요</td><td>I was the fourth person</td></tr>
					<tr><td>이 수업은 오늘 저의 <b>열 번째</b> 수업입니다</td><td>This is my tenth className today</td></tr>
				</tbody></TableLI>
				<li>Sometimes you might see these numbers + counters used in the following way:</li>
				<TableLI><tbody>
					<tr><td>첫 번째</td><td>첫째</td></tr>
					<tr><td>두 번째</td><td>둘째</td></tr>
					<tr><td>세 번째</td><td>셋째</td></tr>
					<tr><td>네 번째</td><td>넷째</td></tr>
				</tbody></TableLI>
				<li>These shortened forms can't be used in as many situations as their longer counterparts. The most common situation where these are used is when talking about children:</li>
				<TableLI><tbody>
					<tr><td>우리 셋째 아이는 야구를 좋아해요</td><td>Our third child likes baseball</td></tr>
					<tr><td>우리 둘째는 고등학생이에요</td><td>Our second (child) is a high school student</td></tr>
				</tbody></TableLI>
				<li>Another place you will see words like 첫째 and 둘째 is when making lists about things that need to be done:</li>
				<TableLI><tbody>
					<tr><td>첫째, 저는 야채를 많이 먹겠습니다</td><td>First, I will eat a lot of vegetables</td></tr>
					<tr><td>둘째, 저는 매일 운동하겠습니다</td><td>Second, I will exercise everyday</td></tr>
				</tbody></TableLI>
				<li>Another useful word is 마지막 which often translates to 'last.'</li>
				<TableLI><tbody>
					<tr><td>이것은 저의 마지막 수업이에요</td><td>This is my last className</td></tr>
					<tr><td>저는 마지막 것을 안 봤어요</td><td>I didn't see the last thing</td></tr>
				</tbody></TableLI>
				<li>The two most common situations of 처음 are: 처음에 (at first/in the beginning) and as an adverb to indicate this is the first time something has happened:</li>
				<TableLI><tbody>
					<tr><td>처음에 그 여자를 싫어했어요</td><td>I didn't like that girl at first</td></tr>
					<tr><td>저는 어제 선생님을 처음 만났어요</td><td>I met my teacher for the first time</td></tr>
				</tbody></TableLI>
			</SubList></li>
		</ul>
	</div>
</div>


</>

//Lesson 7 last two irragulars skipped
//Lesson 9 future tense if 되다 skipped

/*
	<li className="source5">Youtube list: <a href='https://www.youtube.com/playlist?list=PLbFrQnW0BNMUkAFj4MjYauXBPtO3I9O_k'>Billy Go's Beginner Korean Course</a></li>
	<li data-source={13}>90daykorean.com</li>
	<li data-source={14}>howtostudykorean.com</li>
*/