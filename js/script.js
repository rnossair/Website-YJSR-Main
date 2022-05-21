
/* Responsible for switching post-structure between landscape and portrait mode. */

var Win_Width = window.innerWidth || document.body.clientWidth;
window.addEventListener("resize", Resize_Handler, false); 

function Resize_Handler(event) {
    Win_Width = window.innerWidth || document.body.clientWidth;
    if (Win_Width < 992) {
        var Post_List_HTML = document.getElementsByClassName("image-holder") || document.getElementsByClassName("post-preview-holder");
        var len = Post_List_HTML.length;
        for (var i = 0; i < len; i++) {
            document.getElementsByClassName("image-holder")[i].style = "display: table-row";
            document.getElementsByClassName("preview-image")[i].style = "width: 100%; border-radius: 18px";
            document.getElementsByClassName("preview-image")[i].src = "/assets/thumbnails/portrait/" + Post_List[i].image_source;
            document.getElementsByClassName("post-preview-holder")[i].style = "display: table-row";
        }
    }
    else {
        var Post_List_HTML = document.getElementsByClassName("image-holder") || document.getElementsByClassName("post-preview-holder");
        var len = Post_List_HTML.length;
        for (var i = 0; i < len; i++) {
            document.getElementsByClassName("image-holder")[i].style = "display: table-cell";
            document.getElementsByClassName("preview-image")[i].style = "height: 138px; width: 138px; border-radius: 18px";
            document.getElementsByClassName("preview-image")[i].src = "/assets/thumbnails/landscape/" + Post_List[i].image_source;
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
        title: "Alcoholism Drug Restores Vision Loss from Macular Degeneration and Retinitis Pigmentosa",
        subtitle: "A promising solution to these chronic, age-related eye diseases",
        author: "Viniya Kannangnatt",
        author_contact: "",
        publish_date: "May 21, 2022",
        image_source: "alcoholism_drug_restores_vision_loss.png",
        post_destination: "/Posts/Alcoholism-drug-restores-vision-loss.html"
    },
    {
        title: "Progress In Diaster",
        subtitle: "Faults in Engineering Sector somethimes lead to Disasters, but should we simply blame engineering for that?",
        author: "Juliana Russell",
        author_contact: "",
        publish_date: "May 21, 2022",
        image_source: "progress_in_disaster.png",
        post_destination: "/Posts/Progress-in-disaster.html"
    },
    {
        title: "Inclusion in STEM: What’s Changed and What Hasn’t",
        subtitle: "“Girls aren’t built for engineering jobs. You can't do that.”<br><b>“Yes, I can!</b>”",
        author: "Asher Segun-Olasanmi",
        author_contact: "",
        publish_date: "May 21, 2022",
        image_source: "inclusion_in_stem_whats_changed_and_what_hasnt.png",
        post_destination: "/Posts/Inclusion-in-STEM-whats-changed-and-what-hasnt.html"
    },
    {
        title: "The Unfolding of Liver Regeneration",
        subtitle: "Flesh regrown second by second right in front of our eyes.",
        author: "Ngoc Tran Bui",
        author_contact: "", 
        publish_date: "May 20, 2022",
        image_source: "the_unfolding_of_liver_regeneration.png",
        post_destination: "/Posts/The-unfolding-of-liver-regeneration.html"
    },
    {
        title: "CRISPR Gene Editing: A Potential Treatment?",
        subtitle: "",
        author: "Arsa Satheeskumar",
        author_contact: "", 
        publish_date: "May 20, 2022",
        image_source: "crispr_gene_editing_a_potential_treatment.png",
        post_destination: "/Posts/CRISPR-gene-editing-a-potential-treatment.html"
    },
    {
        title: "“Addiction: Our body loves an escape!”",
        subtitle: "Would you risk your family for a euphoric moment? My story with addiction and also the science behind it.",
        author: "McKenzie Mote",
        author_contact: "",
        publish_date: "May 20, 2022",
        image_source: "addiction_our_body_loves_an_escape.png",
        post_destination: "/Posts/Addiction-our-body-loves-an-escape.html"
    },
    {
        title: "Alice in Wonderland Syndrome",
        subtitle: "Appearances can be deceiving. Although there is no cure, it is one of the rarest diseases in the world.",
        author: "Anisha Patel",
        author_contact: "", 
        publish_date: "May 18, 2022",
        image_source: "alice_in_wonderland_syndrome.png",
        post_destination: "/Posts/Alice-in-wonderland-syndrome.html"
    },
    {
        title: "Music & The Brain: How do they Correlate and Why is it important?",
        subtitle: "Music is more than just a simple pastime. Check out how!",
        author: "Alexa Cuvilly",
        author_contact: "",
        publish_date: "May 18, 2022",
        image_source: "music_and_brain_correlation_and_importance.png",
        post_destination: "/Posts/Music-and-the-brain-correlation-and-importance.html"
    },
    {
        title: "Scientific Ways To Reduce Stress",
        subtitle: "Maybe it's time to leave this world of stress and listen to our inner selves...",
        author: "Sophia Zheng",
        author_contact: "",
        publish_date: "April 25, 2022",
        image_source: "scientific_ways_to_reduce_stress.png",
        post_destination: "/Posts/Scientific-ways-to-reduce-stress"
    },
    {
        title: "Reflex Response to Sleep Apnea",
        subtitle: "Dangerous oxygen deprivation, there’s more to know!",
        author: "McKenzie Mote",
        author_contact: "",
        publish_date: "April 19, 2022",
        image_source: "reflex_response_to_sleep_apnea.png",
        post_destination: "/Posts/Reflex-response-to-sleep-apnea"
    },
    {
        title: "Stoichiometry and its Examples",
        subtitle: "Introduction to Stoichiometry with some basic examples.",
        author: "Edward Calzia",
        author_contact: "",
        publish_date: "April 18, 2022",
        image_source: "stoichiometry.png",
        post_destination: "/Posts/Stoichiometry"
    },
    {
        title: "Short Bowel Syndrome",
        subtitle: "There's no Cure for it yet, so it's better to be aware of it than to avoid it.",
        author: "Ayana Samantray",
        author_contact: "",
        publish_date: "April 17, 2022",
        image_source: "short_bowel_syndrome.png",
        post_destination: "/Posts/Short-Bowel-Syndrome"
    },
    {
        title: "Microplastics in Human Body",
        subtitle: "The biggest enemy of the environment has entered out bodies and it now the biggest threat to us!",
        author: "John Aloyzeus Reotutar",
        author_contact: "", 
        publish_date: "April 14, 2022",
        image_source: "microplastics_in_human_body.png",
        post_destination: "/Posts/Microplastics-in-human-body"
    },
    {
        title: "Alteration of Memories",
        subtitle: "Each time you recall your memories, you change them.",
        author: "Amna Eisa",
        author_contact: "",
        publish_date: "April 11, 2022",
        image_source: "alteration_of_memories.png",
        post_destination: "/Posts/Alteration-of-Memories"
    },
    {
        title: "Proof of Fermat's Last Theorem with Trigonometry",
        subtitle: "",
        author: "İdil Doğa Türkmen",
        author_contact: "",
        publish_date: "April 11, 2022",
        image_source: "fermats_last_theorem.png",
        post_destination: "/Posts/Proof-of-Fermats-Last-Theorem"
    },
    {
        title: "How Viruses Give Insight to Human Physiology",
        subtitle: "Let's see what these micro-sized organisms tell us about ourselves.",
        author: "Jared Ortiz-Luis",
        author_contact: "",
        publish_date: "April 6, 2022",
        image_source: "viruses_give_insight_to_human_physiology.png",
        post_destination: "/Posts/How-viruses-give-insight-to-human-physiology"
    },
    {
        title: "Artificial Intelligence and Vaccines: Paradigm Shift in Immunology",
        subtitle: "Can the best friend of humanity help it fight its biggest foe?",
        author: "Vanya Sahi",
        author_contact: "",
        publish_date: "April 6, 2022",
        image_source: "artificial_intelligence_and_vaccines.png",
        post_destination: "/Posts/Artificial-intelligence-and-vaccines"
    },
    {
        title: "Chewing Gum: In Regards to the Human Brain",
        subtitle: "",
        author: "Rohini Vummadi",
        author_contact: "",
        publish_date: "31 March, 2022",
        image_source: "chewing_gun_and_human_brain.png",
        post_destination: "/Posts/Chewing-Gum-In-Regards-To-The-Human-Brain"
    },
    {
        title: "Schrödinger’s Cat: The Misinterpretation Of Quantum Physics",
        subtitle: "",
        author: "Ngoc Tran Bui",
        author_contact: "",
        publish_date: "31 March 2022",
        image_source: "misinterpretation_of_quantum_physics.png",
        post_destination: "/Posts/THE-MISINTERPRETATION-OF-QUANTUM-PHYSICS"
    },
    {
        title: "The COVID-19 Vaccine is Not a Miracle Cure",
        subtitle: "Learn about Covid-19 and its treatments",
        author: "Emily Jia",
        author_contact: "",
        publish_date: "28 March 2022",
        image_source: "covid_vaccine_not_a_miracle_cure.png",
        post_destination: "/Posts/The-COVID-19-Vaccine-Is-Not-a-Miracle-Cure"
    },
    {
        title: "Antikythera Mechanism",
        subtitle: "May have been the world's first STEM project",
        author: "Juliana Russell",
        author_contact: "",
        publish_date: "March 18, 2022",
        image_source: "antikythera_mechanism.png",
        post_destination: "/Posts/Antikythera-mechanism"
    },
    {
        title: "Science Behind Phobia",
        subtitle: "Lets take a deep dive into the science behind phobias",
        author: "Anay Naik",
        author_contact: "https://www.instagram.com/anay_1288_/",
        publish_date: "January 22, 2022",
        image_source: "science_behind_phobia.png",
        post_destination: "/Posts/science-behind-phobia"
    }
];

/* A bit chunk of random stuffs... */
const default_post_number = 6;
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
