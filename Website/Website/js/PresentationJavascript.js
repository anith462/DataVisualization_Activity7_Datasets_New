// Function to display the question and image for the selected dropdown option
function showQuestionAndImage(imageName, question, link) {
    var imageDisplay = document.getElementById('image-display');
    var questionDisplay = document.getElementById('question-display');
    var questionLink = document.getElementById('question-link');


    imageDisplay.src = 'imagesVisualization/' + imageName; // Adjust the path to navigate to the "images" folder
    questionDisplay.textContent = question;


    // Show the link to Vizhub only for Questions 6 to 9
    if (link) {
        questionLink.href = link;
        questionLink.textContent = "Vizhub";
        questionLink.style.display = "block"; // Show the link
    } else {
        questionLink.href = "";
        questionLink.textContent = "";
        questionLink.style.display = "none"; // Hide the link
    }
}


// Event listener for the dropdown menu
document.getElementById('question-dropdown').addEventListener('change', function() {
    var selectedQuestion = this.value;
    if (selectedQuestion) {
        switch (selectedQuestion) {
            case 'Q1':
                showQuestionAndImage('img1.jpg', 'By using matplotlib of the Netflix Viewers in different countries by determining the number of viewers in each country by using python code');
                break;
            case 'Q1.1':
                showQuestionAndImage('img-1.jpg', 'Stacked Bar Chart');
                break;
            case 'Q2':
                    showQuestionAndImage('img2.jpg', 'Number of Netflix Viewers by TV Shows and Movies ');
                    break;
            case 'Q3':
                showQuestionAndImage('img3.jpg', 'Yearly trend for Netflix');
                break;
            case 'Q4':link='https://vizhub.com/anith462/00420aa26d1f4fca99c9dc81691568d5?edit=files&file=index.html';
                showQuestionAndImage('img4.jpg', 'By using Altair as the viewer visualizing the Netflix users information.', link);
                break;
            case 'Q5':link='https://vizhub.com/anith462/928241283893443e953817198469e340?edit=files&file=index.html';
                showQuestionAndImage('img5.jpg', 'Netflix users data displaying based on the high amount of usage all around the world, country wide.',link);
                break;
            case 'Q6':
                    link = 'https://vizhub.com/anith462/311bc87fec2b46ffaa92e8a8c25e6489?edit=files&file=index.html';
                    showQuestionAndImage('img6.jpg', 'Comparing the Shows watched by the audience Vs Avg Hours by using Bubble chart.', link);
                    break;
            case 'Q7':
                    link = 'https://vizhub.com/anith462/9384f41f065d4d79805607e7914d7b9b?edit=files&file=index.html';
                    showQuestionAndImage('img7.jpg', 'The distribution of the viewers based on the marital status.', link);
                    break;
            case 'Q8':
                    link = 'https://vizhub.com/anith462/88504b16ede6421b84204f5b4212e4ef?edit=files&file=data.csv';
                    showQuestionAndImage('img8.jpg', 'Adding the dataset (data.csv) to the vizhub, adding a javascript file, and subsequently generating javascript code to display the average number of hours spent viewing episodes on Netflix by the top most popular nations.', link);
                    break;
            case 'Q9':
                    link = 'https://vizhub.com/anith462/23867e6b78c0471f9ef8e6213d9287a2?edit=files&file=index.js';
                    showQuestionAndImage('img9.jpg', 'By using Histogram in Vizhub displaying the hours spent by the teenagers.', link);
                    break;
            case 'Q10':link='https://vizhub.com/anith462/6ccc9cfcf73d437c997f1409984abdff?edit=files&file=index.html';
                showQuestionAndImage('img10.jpg', 'Displaying the top most country that uses the Netflix around the whole world by using geometrics and d3.js',link);
                break;
            case 'Q11':
                showQuestionAndImage('img11.jpg', 'Netflix users data displaying based on the high amount of usage all around the world, country wide.');
                break;
            default:
                // Clear the displayed question and image if no option is selected
                showQuestionAndImage('', '', ''); // Show empty content for other questions
                    break;
        }
    } else {
        // Clear the displayed question and image if no option is selected
        showQuestionAndImage('', '', ''); // Show empty content if no question is selected
    }
});



