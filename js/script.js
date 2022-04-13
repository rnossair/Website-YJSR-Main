
/* Responsible for switching post-structure between landscape and portrait mode. */

var Win_Width = window.innerWidth || document.body.clientWidth;
window.addEventListener("resize", Resize_Handler, false); 

function Resize_Handler(event) {
    Win_Width = window.innerWidth || document.body.clientWidth;
    if (Win_Width < 992) {
        var Post_List = document.getElementsByClassName("image-holder") || document.getElementsByClassName("post-preview-holder");
        var len = Post_List.length;
        for (var i = 0; i < len; i++) {
            document.getElementsByClassName("image-holder")[i].style = "display: table-row";
            document.getElementsByClassName("preview-image")[i].style = "width: 100%; border-radius: 18px";
            document.getElementsByClassName("post-preview-holder")[i].style = "display: table-row";
        }
    }
    else {
        var Post_List = document.getElementsByClassName("image-holder") || document.getElementsByClassName("post-preview-holder");
        var len = Post_List.length;
        for (var i = 0; i < len; i++) {
            document.getElementsByClassName("image-holder")[i].style = "display: table-cell";
            document.getElementsByClassName("preview-image")[i].style = "height: 138px; width: 138px; border-radius: 18px";
            document.getElementsByClassName("post-preview-holder")[i].style = "display: table-cell";
        }
    }
}

/*
A format for the post list array items.

    {
        title: "",
        subtitle: "",
        author: "",
        author_contact: "", // I personally dunno why does it even exists...
        publish_date: "",
        image_source: "",
        post_destination: ""
    },
*/

/* Array responsible for storing post information and details. */

const Post_List = [
    {
        title: "Alteration of Memories",
        subtitle: "Each time you recall your memories, you change them.",
        author: "Amna Eisa",
        author_contact: "",
        publish_date: "April 11, 2022",
        image_source: "https://images.unsplash.com/photo-1598623549917-a38dc6cd19b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        post_destination: "/Posts/Alteration-of-Memories"
    },
    {
        title: "Proof of Fermat's Last Theorem with Trigonometry",
        subtitle: "",
        author: "İdil Doğa Türkmen",
        author_contact: "",
        publish_date: "April 11, 2022",
        image_source: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aHMlMjB0cmlnb25vbWV0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        post_destination: "/Posts/Proof-of-Fermats-Last-Theorem"
    },
    {
        title: "How Viruses Give Insight to Human Physiology",
        subtitle: "Let's see what these micro-sized organisms tell us about ourselves.",
        author: "Jared Ortiz-Luis",
        author_contact: "",
        publish_date: "April 6, 2022",
        image_source: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBwaHlzaW9sb2d5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        post_destination: "/Posts/How-viruses-give-insight-to-human-physiology"
    },
    {
        title: "Artificial Intelligence and Vaccines: Paradigm Shift in Immunology",
        subtitle: "Can the best friend of humanity help it fight its biggest foe?",
        author: "Vanya Sahi",
        author_contact: "",
        publish_date: "April 6, 2022",
        image_source: "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        post_destination: "/Posts/Artificial-intelligence-and-vaccines"
    },
    {
        title: "Chewing Gum: In Regards to the Human Brain",
        subtitle: "",
        author: "Rohini Vummadi",
        author_contact: "",
        publish_date: "31 March, 2022",
        image_source: "https://images.unsplash.com/photo-1629431136420-23bbe56141a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        post_destination: "/Posts/Chewing-Gum-In-Regards-To-The-Human-Brain"
    },
    {
        title: "Schrödinger’s Cat: The Misinterpretation Of Quantum Physics",
        subtitle: "",
        author: "Ngoc Tran Bui",
        author_contact: "",
        publish_date: "31 March 2022",
        image_source: "https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        post_destination: "/Posts/THE-MISINTERPRETATION-OF-QUANTUM-PHYSICS"
    },
    {
        title: "The COVID-19 Vaccine is Not a Miracle Cure",
        subtitle: "Learn about Covid-19 and its treatments",
        author: "Emily Jia",
        author_contact: "",
        publish_date: "28 March 2022",
        image_source: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        post_destination: "/Posts/The-COVID-19-Vaccine-Is-Not-a-Miracle-Cure"
    },
    {
        title: "Antikythera Mechanism",
        subtitle: "May have been the world's first STEM project",
        author: "Juliana Russell",
        author_contact: "",
        publish_date: "March 18, 2022",
        image_source: "https://images.unsplash.com/photo-1517643070288-f6b3933ad727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        post_destination: "/Posts/Antikythera-mechanism"
    },
    {
        title: "Science Behind Phobia",
        subtitle: "Lets take a deep dive into the science behind phobias",
        author: "Anay Naik",
        author_contact: "https://www.instagram.com/anay_1288_/",
        publish_date: "January 22, 2022",
        image_source: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        post_destination: "/Posts/science-behind-phobia"
    }
];

/* A bit chunk of random stuffs... */
const default_post_number = 10;
const Number_of_Posts = Post_List.length;
const Post_Container = document.getElementsByClassName("post-list")[0];
var rendered_posts = 0;

/* Loop for rendering posts from the array. */
function post_render(number) {
    number = number + rendered_posts;
    if (number > Number_of_Posts) {number = Number_of_Posts;}
    for (var i = rendered_posts; i < number; i++)
    {
        Post_Container.innerHTML += `<div style="width: 100%; display: table;  border-radius: 18px;">
                                        <div style="display: table-row;">
                                            <div class="image-holder">
                                                <img src="${Post_List[i].image_source}" class="preview-image" style="height: 138px; width: 138px; border-radius: 18px; position: relative; left: 0;"> <!--Image link to be pasted-->
                                            </div>
                                            <div class="post-preview-holder" style="display: table-cell">
                                                <div class="post-preview">
                                                    <a href="${Post_List[i].post_destination}"> <!--Redirect link source (to the destination post)-->
                                                        <h2 class="post-title">${Post_List[i].title}</h2> <!--Title of post-->
                                                        <h3 class="post-subtitle">${Post_List[i].subtitle}</h3> <!--Subtitle of post-->
                                                    </a>
                                                    <p class="post-meta">
                                                        Posted by
                                                        <a href="${Post_List[i].author_contact}">${Post_List[i].author}</a> <!--Author's Name-->
                                                        on ${Post_List[i].publish_date}<!--Date of publish-->
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
        rendered_posts = number;
    };
    if (rendered_posts == Number_of_Posts) {document.getElementById("load_more").style = "display: none;"};
    Resize_Handler(null); /* Just in case the website was in portrait mode while the function was called. */
};

post_render(default_post_number);

Resize_Handler(null);