# My Study Notes

This is my first big project that uses React.js and Redux.

![Vite](https://img.shields.io/badge/vite-white?style=for-the-badge&logo=vite)  ![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB")  ![Redux](https://img.shields.io/badge/Redux-252525?style=for-the-badge&logo=redux&logoColor=7f51cb)  ![PostgreSQL](https://img.shields.io/badge/postgresql-white?style=for-the-badge&logo=postgresql)

## Basic Use Guide:
- First page (from Home.js [1]) will show all the topics
- Clicking on one of the topics will send you to it's study note (from Article.js [2])
- Some study notes may have a worksheet link in the footer, clicking on it will send you to a built-in worksheet page (from Worksheet.js [3])

<table><tbody>
	<tr>
		<td>[1] First page screenshot:<br/><br/><img
			src="website_screenshots/home.png"
			style="width: 50%;border: solid #612 2px"
		/></td>
	</tr>
	<tr>
		<td>
			[2] Study notes page screenshots:<br/><br/>
			<img
				src="website_screenshots/history_of_science.png"
				style="border: solid #612 2px; float: left; width:45%;margin-left:1%"
			/>
			<img
				src="website_screenshots/probability_and_statistics.png"
				style="border: solid #612 2px; float: right; width:51%;margin-right:1%"
			/>
		</td>
	</tr>
	<tr><td>
		[3] Worksheet screenshots:<br/><br/>
		<img
			src="website_screenshots/worksheet1.png"
			style="float: left; width:48%; margin-left: 1%;border: solid #612 2px"
		/>
		<img
			src="website_screenshots/worksheet2.png"
			style="float: right; width:48%; margin-right: 1%;border: solid #612 2px"
		/>
	</td></tr>
</tbody></table>

## Updates:

Versioning is done using "npm version [new-version] --git-tag-version false".

update 23.4:
- Made changes to `SourcesSection.tsx` and `calculus_advanced.tsx`.
- Added `VectorCalculus.tsx`.

update 23.2 - 23.3:
- Fixing the bug in `saved_resources`.

update 23.1:
- Seperated the sources section in the article page.
- Added a transition to article buttons.
- Topics in `saved_resources` are now in a particular order.
- Added content to `calculus_advanced.tsx`.
- Added `discrete_mathematics.tsx`.

update 22.12:
- Added content to `physics_1.tsx`.

update 22.11:
- Added content about double integration.

update 22.10:
- Made changes to `saved_resources.tsx` and `Article.tsx`.
- Changed home title to `Uzair's Study Notes`.

update 22.9:
- Updated `physics_1.tsx`.

update 22.8:
- Added content to `DifferentiationOfFunctionsOfSeveralVaraibles`.
- Added `physics_1.tsx`.
- Made small changes to several other articles.
- Forms elements now have an autocomplete attribute.

update 22.7:
- Added "break-word" word wrap to sources list.

update 22.5 - 22.6:
- Made some css and scss changes, like `@used` used instead of `@import`.

update 22.3 - 22.4:
- Fixed build errors.

update 22.2:
- Made some build error fixes.
- Some things from the `CRA` version was not added, so that is done now.

update 22.1:
- Changed from `CRA` to `vite`. This led to a lot of structural changes.
- Changed from `CRA` to `vite`. This led to a lot of structural changes.

update 21.3 - 21.7:
- Modified `number_theory.js`.

update 21.2:
- Made some coding changes.

update 21.1:
- Removed some of my notes.
- Changed how private data is handled.
- Changed how to handle additional resources.
- In `article.js`, changed when the state setting is done.

update 20.5:
- `c_and_cpp_programming_language.js` is now in `computer_science_fundamentals`.

update 20.4:
- The sources where not rendering. That is fixed now.

update 20.3:
- Made coding changes with `Contact.js` because the backend was changed.
- At `Home.js`, made ordering changes with the links.
- For `Article.js`, added an 'offline' mode which (if true) prevents fetching the sources and loading Mathjax.
- For articles, the css for mobile is now changed to "css for small width".
- Made changes to the `calculus` article.

update 20.2:
- Added content to `calculus_advanced.js`.
- `saved_resources.js` now works properly.
- Added code to handle the case where fetching sources may not work.
- Fixed the bug where using the "close lists" button wasn't working the second time.

update 20.1:
- Sources are now stored in a postgres database.
- Made change to all of the articles to reflect the changes.
- Reordered some of the links in the home page.
- Renamed `computer_science_advance_topics` to `computer_science_advanced_topics`.
- Made changes to `calculus.js`.
- Added `calculus_advanced.js`.
- Deleted the content of `saved_resources.js`.

update 19.75 - 19.78:
- Added more content and made changes to `calculus.js`.

update 19.74:
- Added more content and made changes to `calculus.js`.
- Changed `history_and_philosophy_of_science.js` to `philosophy_of_science.js`.
- Changed `c_programming.js` to `cpp_programming.js`, and also made changes to the file.
- Removed the history part in `electricity_magnetism_and_circuits.js`.

update 19.55 - 19.73:
- Added more content and made changes to `calculus.js`.
  
update 19.42 - 19.54:
- Added more content and made changes to `number_theory.js` and `calculus.js`.

update 19.10 - 19.41:
- Added more content and made changes to `calculus.js`.

update 19.9:
- Added content to `precalculus.js`.
- Added another source in `calculus.js`.

update 19.8:
- Fixed horizontal overflow issue at the home page for mobile.
- Made styling changes for the contact form and the color boxes in sources list.

update 19.6 - 19.7:
- Made changes to `number_theory.js`.

update 19.5:
- Made changes to `data_structures_and_algorithm.js`, `calculus.js`, `numbert_theory.js` and `precalculus.js`.
- Removed the `lastSavedScrollY` static variable from `Article.js`.
- `#DownButton` now disappears when you are 800px pixels below the bottom of the page but becomes visible again if you open a long sublist.

update 19.4:
- Made coding style changes to `Article.js`.
- Added REMOVE tag to some sources in `sourceList.js`.
- Added `saved_resources.js` and `c_programming_language.js`.
- Added `operating_systems.js` (this was private before).
- Made changes to `japanese.js` and `korean.js`.

update 19.3:
- Updated `cryptography.js`, `information_and_entropy.js`, `number_theory.js`, `precalculus.js` and `calculus.js`.
- Precalculus pictures now have a different folder.
   
update 19.2:
- `cryptography` is now an advanced topic.
- removed `opearting systems`
- The `listsUpButton` button now disappears when viewing an image.
- Updated `cryptography.js`, `number_theory.js` and `probability_and_Statistics.js`.

update 19.1:
- Added a "Close all lists" button.
- Added `networking.js` and `information_and_entropy.js`.
- Made changes to `guide.js`, `number_theory.js` and `calculus.js`.

update 18.2 - 18.5:
- `Questions` component dialog box is now closed by default.

update 18.1:
- Added `Questions` component.
- Added content to `number_theory` and `information_and_entropy`.
- In `Article.js`, date is now in the `SMALL` tag.
- Made some changes to the License section at home page.

update 17.17 - 17.20:
- In `Article.js`, two states are now defined, one for footer and the other for `wholeContent`.

update 17.3 - 17.16:
- In `Worksheet.js`, the `import` function is used instead of `require`.

update 17.2:
- In `Article.js`, the `import` function is used instead of `require`.

update 16.3 (or 17.1):
- The article date below H1 is deleted from all files and is now automatically placed below H1 after the article is mounted.
- Added `chemistry.js`

update 16.1 - 16.2:
- Github pages is no longer used, now the website is hosted on Vercel.

update 15.7:
- Added code was excluding private files, and made changes to `calculus.js` and `number_theory.js`. Also added `manim.js`.

update 15.6:
- Hovering mouse on the article would now show the source.

update 15.5:
- Added `precalculus.js` and changed the content of `calculus.js`.

update 15.4:
- Added content to `french.js`.

update 15.3:
- Added content to `probability_and_statics.js`.

update 15.2:
- Added a license box in the home page which shows the website license.

update 15.1:
- Added a contact form

update 14.10:
- Added `information_and_entropy.js`.
- The `public` and `src` folders are now shows in GitHub.

update 14.8 - 14.9:
- In `article.js`, anchors in the sources section now have target="_blank".
- When directly using any url other the the base url, github would redirect to 404.html, to fix this I changed my 404.html (using this article https://github.com/rafgraph/spa-github-pages).

update 14.7:
- In `article.js`, the `this.getReferenceEl` needs only H2 elements as input.

update 14.2 - 14.6:
- 404 now redirects to home page.

update 14.1:
- Added `calculus.js`, `calculus_pics`, `data_mining.js`, `data_mining_pics`, `4412pics` and `data_mining_with_r.js`.
- Links in the "Contents" section used to open in a new tab, now they don't.
- Hovering on the left and right side of an overflowing table would now horizontally scroll it.
- Added mobile-specific styles.
- MathJax components are now static instead of relative.
- In ordered sublists: images, figures and charts weren't suppose to show the number marker, so that's fixed now.

update 13.3 - 13.5:
- These commits are for testing. Made some bug fixes during these commits.

update 13.2:
- Horizontal scroll was not showing when window was less than min-width, so that's fixed now.

update 13.1:
- Renamed repository to `studyNotes`.

update 12.1:
- Added `number_theory.js`.

update 11.5:
- Added more content to `deep_learning.js`
- `CodePre` now trims from both start and end.

update 11.4:
- Added more content to `deep_learning.js`

update 11.3:
- Added content to `probability_and_statistics.js`
- Added `SubDiv.js` which can hold is a child of UL or OL and can hold multiple UL or OL
- Added `ownExplanation` class for UL and OL which is for my own explanations

update 11.2:
- In `Article.js`, the functions in `componentDidMount` wrapped in `window.setTimeout`
- Added `%PUBLIC_URL%` to `404.html` because the logo and font weren't displaying
- Made changes in `Worksheet.js`:
	- Some of the dynamic DOM manipulation happens via React features, instead of directly through JQuery.

update 11.1:
- Made changes to `korean.js`
- Made changes to `404.html`, so it shows the loading screen before going to home page
- Added `Redux`, so now global states are being used to reduce direct DOM manipulation
	- For now, `Redux` is only being used for `ImgView`

update 10.1:
- Removed `[target = "_blank"]` from anchors
- Removed `#main` from `worksheet.scss`
- Made changes to `data_structure_and_algorithms.js` to display the correct colors
- Made changes to `computer_organization_and_architecture.js` so `h2`'s now have an id
- `Articles.js` now uses separate functions to render footer and `#reference`
- Made changes to `ImgView` component so contents are displayed properly
- Added `TableComp` component which will be used to manage tables

update 9.4:
- All pages now get their sources list from the sources "database". Actual db will be implemented later.
- Edited the 404 page.
- Made minor changes to the loading screen file.

update 9.3:
- Made minor changes to `README.md`

update 9.2:
- Added website screenshots to `README.md`
- Made minor changes to webpages

update 9.1:
- Added `ImgComp`, which is used as a wrapper for the `IMG` tag with added functionality.
- Added `Mathstuff`, a component to handle "non-inline" MathJax.
- I had to edit every page to implement this 😔, but I added a python code that could edit file lines to make my life easier.
- Added `ImgView` component that shows a larger version of images, `MathStuff` and charts.

update 8.1:
- Reworked the entire code of the worksheet component to improve loading time.

