# My Study Notes

This is my first big project that uses React.js and Redux

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![Redux](https://img.shields.io/badge/Redux-252525?style=for-the-badge&logo=redux&logoColor=7f51cb)

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

### Feb 1, 2024

update 13.3:
- This commit is for testing

### Jan 31, 2024

update 13.2:
- Horizontal scroll was not showing when window was less than min-width, so that's fixed now.

update 13.1:
- Renamed repository to `studyNotes`.

### Jan 10, 2024
update 12.1:
- Added `number_theory.js`.

### Jan 10, 2024
update 11.5:
- Added more content to `deep_learning.js`
- `CodePre` now trims from both start and end.

### Dec 12, 2023
update 11.4:
- Added more content to `deep_learning.js`

### Nov 13, 2023
update 11.3:
- Added content to `probability_and_statistics.js`
- Added `SubDiv.js` which can hold is a child of UL or OL and can hold multiple UL or OL
- Added `ownExplanation` class for UL and OL which is for my own explanations

### Nov 10, 2023
update 11.2:
- In `Article.js`, the functions in `componentDidMount` wrapped in `window.setTimeout`
- Added `%PUBLIC_URL%` to `404.html` because the logo and font weren't displaying
- Made changes in `Worksheet.js`:
    - Some of the dynamic DOM manipulation happens via React features, instead of directly through JQuery.

### Nov 9, 2023
update 11.1:
- Made changes to `korean.js`
- Made changes to `404.html`, so it shows the loading screen before going to home page
- Added `Redux`, so now global states are being used to reduce direct DOM manipulation
    - For now, `Redux` is only being used for `ImgView`

### Nov 6, 2023
update 10.1:
- Removed `[target = "_blank"]` from anchors
- Removed `#main` from `worksheet.scss`
- Made changes to `data_structure_and_algorithms.js` to display the correct colors
- Made changes to `computer_organization_and_architecture.js` so `h2`'s now have an id
- `Articles.js` now uses separate functions to render footer and `#reference`
- Made changes to `ImgView` component so contents are displayed properly
- Added `TableComp` component which will be used to manage tables

### Nov 5, 2023
update 9.4:
- All pages now get their sources list from the sources "database". Actual db will be implemented later.
- Edited the 404 page.
- Made minor changes to the loading screen file.

### Nov 3, 2023
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

