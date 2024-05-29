import SubList from "../../articleRelatedStuff/SubList";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "My Japanese notes";
export const sourcesColor = {4:null, 15:"#4f94ac", 16:"#3a3"};
export const content = <>
<h1>My Japanese Notes</h1>
<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
{getSourcesOL(sourcesColor)}

<h2 id="reading">Reading</h2>
<div className="content">
	<div style={{width: "48%", marginLeft: "1%", marginRight: "1%", float: "left"}}>
		<h3>Japanese Alphabet (from Wikipedia)</h3>
		<ul>
			<li><b>Kanji</b> (漢字) are logographic characters taken from Chinese script and used in the writing of Japanese. <u>Readings:</u><SubList>
				<li><b>On'yomi</b> (音読み), is the modern descendant of the Japanese approximation of the base Chinese pronunciation of the character at the time it was introduced. Some kanji were introduced from different parts of China at different times, and so have multiple on'yomi, and often multiple meanings.</li>
				<li><b>Kun'yomi</b> (訓読み) is a reading based on the pronunciation of a native Japanese word that closely approximated the meaning of the Chinese character when it was introduced. As with on'yomi, there can be multiple kun'yomi for the same kanji, and some kanji have no kun'yomi at all.</li>
			</SubList></li>
			<li><b>Hiragana</b> (平仮名) emerged as a manual simplification via cursive script of the most phonetically widespread kanji among those who could read and write during the Heian period (794-1185). The main creators of the current hiragana were ladies of the Japanese imperial court, who used the script in the writing of personal communications and literature.</li>
			<li><b>Katakana</b> (片仮名) emerged around the 9th century, in the Heian period, when Buddhist monks created a syllabary derived from Chinese characters to simplify their reading, using portions of the characters as a kind of shorthand.</li>
			<li><b>Kana</b> (仮名) are syllabaries used to write Japanese phonological units. In current usage, 'kana' can simply mean hiragana and katakana.</li>
			<li><b>Gojūon:</b><SubList>
				<li>A traditional system ordering kana characters by their component phonemes.</li>
				<li>The "fifty" (gojū) in its name refers to the 5 x 10 grid in which the characters are displayed. Each kana, which may be a hiragana or katakana character, corresponds to one sound in Japanese.</li>
				<li>The kana for syllabic n (hiragana ん) is not part of the grid, as it was introduced long after the gojūon ordering was devised. (Previously mu (hiragana む) was used for this sound.)</li>
			</SubList></li>
			<li>By adding a <b>dakuten marker</b> ( ゛), a voiceless consonant is turned into a voiced consonant: k-&gt;g, ts/s-&gt;z, t-&gt;d, h-&gt;b and ch/sh-&gt;j.</li>
			<li>The <b>handakuten</b> ( ゜) is a diacritic used with the kana for syllables starting with <i>h</i> to indicate that they should instead be pronounced with [p].</li>
			<li>A small tsu (っ in hiragana and ッ in katakana), called a <b>sokuon</b>, indicates that the following consonant is geminated (doubled).  Compare (さか / サカ) saka "hill" with (さっか / サッカ) sakka "author".</li>
			<li>The sokuon also sometimes appears at the end of utterances, where it denotes a glottal stop.</li>
			<li>A small version of the hiragana / katakana for ya, yu or yo may be added to hiragana / katakana ending in <i>i</i>. This changes the <i>i</i> vowel sound to a glide (palatalization) to a, u or o. Addition of the small y kana is called <b>yōon</b>.</li>
			<li>Plain (clear) and voiced iteration marks are written in hiragana as ゝ and ゞ, respectively. These marks are rarely used nowadays. Standard and voiced iteration marks are written in katakana as ヽ and ヾ, respectively.</li>
			<li>The hiragana iteration mark is seen in some personal names like さゝき Sasaki or おゝの Ōno, and it forms part of the formal name of the car company Isuzu (いすゞ).</li>
			<li><b>Man'yōgana</b> is an ancient writing system that uses Chinese characters to represent the Japanese language. It was the first known kana system to be developed as a means to represent the Japanese language phonetically. Man'yōgana uses kanji characters for their phonetic rather than semantic qualities - in other words, they are used for their sounds and not their meanings.</li>
			<li>Simplified versions of man'yōgana eventually gave rise to both the hiragana and katakana scripts.</li>
			<li>In contrast with kana (literally "borrowed name", in reference to the character being "borrowed" as a label for its sound), kanji are also called <b>mana</b> (literally "true name", in reference to the character being used as a label for its meaning).</li>
			<li><b>Shinjitai</b> ("new character form") are the simplified forms of kanji. Shinjitai were created by reducing the number of strokes in <b>kyūjitai</b> ("old character form").</li>
			<li><a href='https://www.japanpitt.pitt.edu/sites/default/files/japanese_writing_system_ii.pdf'><b>Ateji</b> is a bit like man'yōgana, except that in the case of ateji two or more morae are typically associated with a kanji.</a></li>
			<li><b>Furigana</b> is a Japanese reading aid consisting of smaller kana or syllabic characters printed either above or next to kanji (logographic characters) or other characters to indicate their pronunciation.</li>
		</ul>
	</div>
	<div style={{width: "48%",marginLeft: "1%",marginRight: "1%",float: "right"}}>
		<h3>Characters (from Wikipedia)</h3>
		<div>
			<TableDiv style={{float: "left", width: "50%"}}><caption>Hiragana Gojūon</caption><tbody>
			<tr>
			<th></th>
			<th>a</th>
			<th>i</th>
			<th>u</th>
			<th>e</th>
			<th>o
			</th></tr>
			<tr>
			<th>∅
			</th>
			<td>あ</td>
			<td>い</td>
			<td>う</td>
			<td>え</td>
			<td>お
			</td></tr>
			<tr>
			<th>k
			</th>
			<td>か</td>
			<td>き</td>
			<td>く</td>
			<td>け</td>
			<td>こ
			</td></tr>
			<tr>
			<th>s
			</th>
			<td>さ</td>
			<td>し</td>
			<td>す</td>
			<td>せ</td>
			<td>そ
			</td></tr>
			<tr>
			<th>t
			</th>
			<td>た</td>
			<td>ち</td>
			<td>つ</td>
			<td>て</td>
			<td>と
			</td></tr>
			<tr>
			<th>n
			</th>
			<td>な</td>
			<td>に</td>
			<td>ぬ</td>
			<td>ね</td>
			<td>の
			</td></tr>
			<tr>
			<th>h
			</th>
			<td>は</td>
			<td>ひ</td>
			<td>ふ</td>
			<td>へ</td>
			<td>ほ
			</td></tr>
			<tr>
			<th>m
			</th>
			<td>ま</td>
			<td>み</td>
			<td>む</td>
			<td>め</td>
			<td>も
			</td></tr>
			<tr>
			<th>y
			</th>
			<td>や</td>
			<td></td>
			<td>ゆ</td>
			<td></td>
			<td>よ</td></tr>
			<tr>
			<th>r
			</th>
			<td>ら</td>
			<td>り</td>
			<td>る</td>
			<td>れ</td>
			<td>ろ
			</td></tr>
			<tr>
			<th>w
			</th>
			<td>わ</td>
			<td>ゐ</td>
			<td></td>
			<td>ゑ</td>
			<td>を
			</td></tr>
			<tr>
			<td colSpan="6">ん</td>
			</tr>
			<tr><th>g</th><td>が</td><td>ぎ</td><td>ぐ</td><td>げ</td><td>ご</td></tr>
			<tr><th>z</th><td>ざ</td><td>じ</td><td>ず</td><td>ぜ</td><td>ぞ</td></tr>
			<tr><th>d</th><td>だ</td><td>ぢ</td><td>づ</td><td>で</td><td>ど</td></tr>
			<tr><th>b</th><td>ば</td><td>び</td><td>ぶ</td><td>べ</td><td>ぼ</td></tr>
			<tr><th>p</th><td>ぱ</td><td>ぴ</td><td>ぷ</td><td>ぺ</td><td>ぽ</td></tr>
			</tbody></TableDiv>
			<TableDiv style={{float: "right", width: "50%"}}><caption>Katakana Gojūon</caption><tbody>
				<tr>
				<th></th>
				<th>a</th>
				<th>i</th>
				<th>u</th>
				<th>e</th>
				<th>o
				</th></tr>
				<tr>
				<th><span>∅</span>
				</th>
				<td>ア</td>
				<td>イ</td>
				<td>ウ</td>
				<td>エ</td>
				<td>オ
				</td></tr>
				<tr>
				<th>k
				</th>
				<td>カ</td>
				<td>キ</td>
				<td>ク</td>
				<td>ケ</td>
				<td>コ
				</td></tr>
				<tr>
				<th>s
				</th>
				<td>サ</td>
				<td>シ</td>
				<td>ス</td>
				<td>セ</td>
				<td>ソ
				</td></tr>
				<tr>
				<th>t
				</th>
				<td>タ</td>
				<td>チ</td>
				<td>ツ</td>
				<td>テ</td>
				<td>ト
				</td></tr>
				<tr>
				<th>n
				</th>
				<td>ナ</td>
				<td>ニ</td>
				<td>ヌ</td>
				<td>ネ</td>
				<td>ノ
				</td></tr>
				<tr>
				<th>h
				</th>
				<td>ハ</td>
				<td>ヒ</td>
				<td>フ</td>
				<td>ヘ</td>
				<td>ホ
				</td></tr>
				<tr>
				<th>m
				</th>
				<td>マ</td>
				<td>ミ</td>
				<td>ム</td>
				<td>メ</td>
				<td>モ
				</td></tr>
				<tr>
				<th>y
				</th>
				<td>ヤ</td>
				<td></td>
				<td>ユ</td>
				<td></td>
				<td>ヨ
				</td></tr>
				<tr>
				<th>r
				</th>
				<td>ラ</td>
				<td>リ</td>
				<td>ル</td>
				<td>レ</td>
				<td>ロ
				</td></tr>
				<tr>
				<th>w
				</th>
				<td>ワ</td>
				<td>ヰ</td>
				<td></td>
				<td>ヱ</td>
				<td>ヲ
				</td></tr>
				<tr><td colSpan="6">ン</td></tr>
				<tr>
				<th>g
				</th>
				<td>ガ</td>
				<td>ギ</td>
				<td>グ</td>
				<td>ゲ</td>
				<td>ゴ
				</td></tr>
				<tr>
				<th>z
				</th>
				<td>ザ</td>
				<td>ジ</td>
				<td>ズ</td>
				<td>ゼ</td>
				<td>ゾ
				</td></tr>
				<tr>
				<th>d
				</th>
				<td>ダ</td>
				<td>ヂ</td>
				<td>ヅ</td>
				<td>デ</td>
				<td>ド
				</td></tr>
				<tr>
				<th>b
				</th>
				<td>バ</td>
				<td>ビ</td>
				<td>ブ</td>
				<td>ベ</td>
				<td>ボ
				</td></tr>
				<tr>
				<th>p
				</th>
				<td>パ</td>
				<td>ピ</td>
				<td>プ</td>
				<td>ペ</td>
				<td>ポ
				</td></tr>
			</tbody></TableDiv>
		</div>
		<div>
			<TableDiv style={{float: "left", width: "50%"}}><caption>Hiragana with yōon</caption><tbody>
				<tr>
				<th>
				</th>
				<th>ゃ
				</th>
				<th>ゅ
				</th>
				<th>ょ
				</th></tr>
				<tr>
				<th>き
				</th>
				<td>きゃ
				</td>
				<td>きゅ
				</td>
				<td>きょ
				</td></tr>
				<tr>
				<th>し
				</th>
				<td>しゃ
				</td>
				<td>しゅ
				</td>
				<td>しょ
				</td></tr>
				<tr>
				<th>ち
				</th>
				<td>ちゃ
				</td>
				<td>ちゅ
				</td>
				<td>ちょ
				</td></tr>
				<tr>
				<th>に
				</th>
				<td>にゃ
				</td>
				<td>にゅ
				</td>
				<td>にょ
				</td></tr>
				<tr>
				<th>ひ
				</th>
				<td>ひゃ
				</td>
				<td>ひゅ
				</td>
				<td>ひょ
				</td></tr>
				<tr>
				<th>み
				</th>
				<td>みゃ
				</td>
				<td>みゅ
				</td>
				<td>みょ
				</td></tr>
				<tr>
				<th>り
				</th>
				<td>りゃ
				</td>
				<td>りゅ
				</td>
				<td>りょ
				</td></tr>
				<tr>
				<th colSpan="4">dakuten</th></tr>
				<tr>
				<th>ぎ
				</th>
				<td>ぎゃ
				</td>
				<td>ぎゅ
				</td>
				<td>ぎょ
				</td></tr>
				<tr>
				<th>じ
				</th>
				<td>じゃ
				</td>
				<td>じゅ
				</td>
				<td>じょ
				</td></tr>
				<tr>
				<th>ぢ
				</th>
				<td>ぢゃ
				</td>
				<td>ぢゅ
				</td>
				<td>ぢょ
				</td></tr>
				<tr>
				<th>び
				</th>
				<td>びゃ
				</td>
				<td>びゅ
				</td>
				<td>びょ
				</td></tr>
				<tr>
				<th colSpan="4">handakuten</th></tr>
				<tr>
				<th>ぴ
				</th>
				<td>ぴゃ
				</td>
				<td>ぴゅ
				</td>
				<td>ぴょ
				</td></tr>
			</tbody></TableDiv>
			<TableDiv style={{float: "right", width: "50%"}}><caption>Katakana with yōon</caption><tbody>
				<tr>
				<th>
				</th>
				<th>ャ
				</th>
				<th>ュ
				</th>
				<th>ョ
				</th></tr>
				<tr>
				<th>キ
				</th>
				<td>キャ
				</td>
				<td>キュ
				</td>
				<td>キョ
				</td></tr>
				<tr>
				<th>シ
				</th>
				<td>シャ
				</td>
				<td>シュ
				</td>
				<td>ショ
				</td></tr>
				<tr>
				<th>チ
				</th>
				<td>チャ
				</td>
				<td>チュ
				</td>
				<td>チョ
				</td></tr>
				<tr>
				<th>ニ
				</th>
				<td>ニャ
				</td>
				<td>ニュ
				</td>
				<td>ニョ
				</td></tr>
				<tr>
				<th>ヒ
				</th>
				<td>ヒャ
				</td>
				<td>ヒュ
				</td>
				<td>ヒョ
				</td></tr>
				<tr>
				<th>ミ
				</th>
				<td>ミャ
				</td>
				<td>ミュ
				</td>
				<td>ミョ
				</td></tr>
				<tr>
				<th>リ
				</th>
				<td>リャ
				</td>
				<td>リュ
				</td>
				<td>リョ
				</td></tr>
				<tr>
				<th colSpan="4">dakuten
				</th></tr>
				<tr>
				<th>ギ
				</th>
				<td>ギャ
				</td>
				<td>ギュ
				</td>
				<td>ギョ
				</td></tr>
				<tr>
				<th>ジ
				</th>
				<td>ジャ
				</td>
				<td>ジュ
				</td>
				<td>ジョ
				</td></tr>
				<tr>
				<th>ヂ
				</th>
				<td>ヂャ
				</td>
				<td>ヂュ
				</td>
				<td>ヂョ
				</td></tr>
				<tr>
				<th>ビ
				</th>
				<td>ビャ
				</td>
				<td>ビュ
				</td>
				<td>ビョ
				</td></tr>
				<tr>
				<th colSpan="4">handakuten
				</th></tr>
				<tr>
				<th>ピ
				</th>
				<td>ピャ
				</td>
				<td>ピュ
				</td>
				<td>ピョ
				</td></tr>
			</tbody></TableDiv>
		</div>
	</div>
</div>

<h2 id="basics">Basics</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<div data-source={15}>
			<ul>
				<li>Simple "I am / you are / this is " sentence:<SubList>
					<TableLI><tbody><tr><td>AはBです。</td></tr></tbody></TableLI>
					<li>A is what you're talking about, while B is an adjective/noun that describes A. In other words, A is B.</li>
					<li>In Japanese, verbs come at the end of the sentences (in this case です, for negative use じやないです, or the more polite form ではありません).</li>
					<li>The は particle acts as a topic marker, and is read as "wa". It is also read as "wa" in ではありません.</li>
					<TableLI><tbody>
						<tr><td>わたし は かわいい です。</td><td>I am cute.</td></tr>
						<tr><td>かれ は かわいい です。</td><td>He is cute.</td></tr>
						<tr><td>わたし は カナダじん じやないです。</td><td>I am not Canadian.</td></tr>
						<tr><td>わたし は にんげん ではありません。</td><td>I am not human.</td></tr>
						<tr><td>かれ は しんせつ じやないです。</td><td>He is not kind.</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Common Use of の:<SubList>
					<li>Most common use is to mark possession.</li>
					<TableLI><tbody>
						<tr><td>カオちゃん の。</td><td>Kao chan's</td></tr>
						<tr><td>あなた の。</td><td>your</td></tr>
						<tr><td>わたし の なまえ は カオ です。</td><td>my name is Kao.</td></tr>
						<tr><td>わたし の おとうと は カオ です。</td><td>my little brother is Kao.</td></tr>
						<tr><td>カオ は わたし の おとうと です。</td><td>Kao is my little brother.</td></tr>
					</tbody></TableLI>
					<li>Other use is to add more information to the second noun.</li>
					<TableLI><tbody>
						<tr><td>きょう の てんき。</td><td>today's weather</td></tr>
						<tr><td>にほんご の せんせい。</td><td>Japanese teacher</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>There are two kinds of adjectives: い-adjectives and な-adjectives:<SubList>
					<li>ちいさい ほん: The word ちいさい is an い-adjective, meaning 'small',  so this phrase means 'a small book'.</li>
					<TableLI><tbody>
						<tr><td><b>かわいい</b> いぬ</td><td>a cute dog</td></tr>
						<tr><td><b>げんきな</b> がくせい</td><td>an energetic student</td></tr>
						<tr><td><b>きれいな</b> へや</td><td>a pretty room</td></tr>
						<tr><td>じしょ は <b>おおきい</b> ほん です。</td><td>a dictionary (じしょ) is a big book.</td></tr>
						<tr><td>かのじょ は <b>しずかな</b> ひと です。</td><td>She is a quiet person.</td></tr>
						<tr><td>これ は <b>おいしい</b> コーヒー です。</td><td>This is delicious coffee.</td></tr>
					</tbody></TableLI>
					<li>You could also drop the noun and just place an adjective before です. Example: じしょ は おおきい です ((the) dictionary is big).</li>
					<li>In this pattern [AはAdjectiveです], you do not include the な in the な-adjective. It is used only when modifying the noun.</li>
					<TableLI><tbody>
						<tr><td>かのじょ は しずか です。</td><td>She is quiet.</td></tr>
					</tbody></TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}} data-source={16}>
		<ul>
			<li>In Japanese, verbs go at the end. Also, Japanese does not have words like "a" or "the":<SubList>
				<TableLI><tbody>
					<tr><td>すしです。</td><td>It's sushi.</td></tr>
					<tr><td>おちゃとすしです。</td><td>It's green tea and sushi.</td></tr>
					<tr><td>ごはんとおちゃです。</td><td>It's rice and green tea.</td></tr>
					<tr><td>べんごしです。</td><td>She's a lawyer.</td></tr>
					<tr><td>かっこいいせんせいです。</td><td>He's a cool teacher.</td></tr>
					<tr><td>やさしいひとです。</td><td>He's a nice person.</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>Use さん after somebody's name to show respect.</li>
				<li>Greetings like hello and bye comes after the name:<SubList>
				<TableLI><tbody>
					<tr><td>けんさん、こんにちは。</td><td>Hello, Ken</td></tr>
					<tr><td>けんさん、じゃあね。</td><td>Bye, Ken</td></tr>
					<tr><td>けんさん、どうぞよろしく。</td><td>Nice to meet you, Naomi</td></tr>
					<tr><td>はなさん、またあした。</td><td>See you tomorrow, Hana</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>The は after a word makes it the topic of the sentence:<SubList>
				<TableLI><tbody>
					<tr><td>カレーはおいしいです。</td><td>Curry is tasty.</td></tr>
					<tr><td>これはラーメンです。</td><td>This is ramen.</td></tr>
					<tr><td>ラーメンはおいしいです。</td><td>Ramen is tasty.</td></tr>
					<tr><td>それはおちゃです。</td><td>That is green tea.</td></tr>
				</tbody></TableLI>
			</SubList></li>
			<li>To form a question:<SubList>
				<li>Putting か at the end of a sentence turns a statement into a question. A period is still used.</li>
				<li>Most questions words come right before ですか.</li>
				<TableLI><tbody>
					<tr><td>ホテルは<b>ここ</b>ですか。</td><td>Is the hotel here?</td></tr>
					<tr><td>ホテルは<b>どこ</b>ですか。</td><td>Where's the hotel?</td></tr>
				</tbody></TableLI>
			</SubList></li>
		</ul>
	</div>
</div>

</>