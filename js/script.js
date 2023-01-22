
let tabHeader = document.getElementsByClassName("tab-bar")[0];
let tabIndicator = document.getElementsByClassName("indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
matches_found = []

for (let i = 0; i < tabsPane.length - 1; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName('active')[0].style = "color: #313131";
        tabHeader.getElementsByClassName('active')[0].classList.remove("active");
        tabIndicator.style = `left: calc(50% - 360px + (180px * ${i}));`;
        tabsPane[i].classList.add("active");
        tabsPane[i].style = "color: #0085A1"
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName("tb")[i].classList.add("active");
    })
}

/* Responsible for switching post-structure between landscape and portrait mode. */
var Win_Width = window.innerWidth || document.body.clientWidth;
window.addEventListener("resize", resizeHandler, false); 

function resizeHandler(event) {
    winWidth = window.innerWidth || document.body.clientWidth;
    if (winWidth < 992) {
        for (grIndex in group_list) {
            var postContainer = corresp_post_cont_dict[group_list[grIndex]]
            var htmlPostList = postContainer.getElementsByClassName("post")
            var len = htmlPostList.length;
            for (var i = 0; i < len; i++) {
                postContainer.getElementsByClassName("image-holder")[i].style = "display: table-row";
                postContainer.getElementsByClassName("preview-image")[i].style = "width: 100%; border-radius: 18px";
                postContainer.getElementsByClassName("preview-image")[i].src = "/assets/thumbnails/portrait/" + Post_List[group_list[grIndex]][i].image_source;
                postContainer.getElementsByClassName("post-preview-holder")[i].style = "display: table-row";
            }
        }
        for (i = 0; i < matches_found.length; i++) {
            var postGroup = group_list[matches_found[i][0]];
            var resultsContainer = document.getElementById("search-results")
            var Post = Post_List[postGroup][matches_found[i][1]]
            resultsContainer.getElementsByClassName("res-image-holder")[i].style = "display: table-row";
            resultsContainer.getElementsByClassName("res-preview-image")[i].style = "width: 100%; border-radius: 18px";
            resultsContainer.getElementsByClassName("res-preview-image")[i].src = "/assets/thumbnails/portrait/" + Post.image_source;
            resultsContainer.getElementsByClassName("res-post-preview-holder")[i].style = "display: table-row";
        }
    }
    else {
        for (grIndex in group_list) {
            var postContainer = corresp_post_cont_dict[group_list[grIndex]]
            var htmlPostList = postContainer.getElementsByClassName("post")
            var len = htmlPostList.length;
            for (var i = 0; i < len; i++) {
                postContainer.getElementsByClassName("image-holder")[i].style = "display: table-cell";
                postContainer.getElementsByClassName("preview-image")[i].style = "height: 138px; width: 138px; border-radius: 18px;";
                postContainer.getElementsByClassName("preview-image")[i].src = "/assets/thumbnails/landscape/" + Post_List[group_list[grIndex]][i].image_source;
                postContainer.getElementsByClassName("post-preview-holder")[i].style = "display: table-cell";
            }
        }
        for (i = 0; i < matches_found.length; i++) {
            var postGroup = group_list[matches_found[i][0]];
            var resultsContainer = document.getElementById("search-results")
            var Post = Post_List[postGroup][matches_found[i][1]]
            resultsContainer.getElementsByClassName("res-image-holder")[i].style = "display: table-cell";
            resultsContainer.getElementsByClassName("res-preview-image")[i].style = "height: 138px; width: 138px; border-radius: 18px;";
            resultsContainer.getElementsByClassName("res-preview-image")[i].src = "/assets/thumbnails/landscape/" + Post.image_source;
            resultsContainer.getElementsByClassName("res-post-preview-holder")[i].style = "display: table-cell";
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

// Array responsible for storing post information and details.

const Post_List = {
    "sci": [
        {
            title: "How SARS-CoV-2 affect Human Cells",
            subtitle: "Let's take a look on how one of the world's deadliest virus makes it's way to accomplish their lethal mission.",
            author: "Soham Jindal",
            author_contact: "",
            publish_date: "January 22, 2023",
            image_source: "how_sars_cov_2_affect_human_cells.png",
            post_destination: "/Posts/How-SARS-Cov-2-affect-human-cells.html"
        },
        {
            title: "CRISPR: Beneficial, Effective yet Problematic Healthcare",
            subtitle: "",
            author: "Kamal Korrapati",
            author_contact: "",
            publish_date: "January 18, 2023",
            image_source: "crispr-problematic-healthcare.png",
            post_destination: "/Posts/CRISPR-Beneficial-Effective-yet-Problematic-Healthcare.html"
        },
        {
            title: "Can Swarming Locusts generate as much Electricity as a Storm Cloud?",
            subtitle: "",
            author: "Jasmine Biju",
            author_contact: "",
            publish_date: "January 14, 2023",
            image_source: "can_swarming_locusts_produce_electricity.png",
            post_destination: "/Posts/Can-swarming-locusts-generate-as-much-electricity-as-storm-cloud.html"
        },
        {
            title: "CAR-T Cells: Eliminating Residual Tumor Cells",
            subtitle: "",
            author: "Jasmine Biju",
            author_contact: "",
            publish_date: "January 14, 2023",
            image_source: "carT_cells_eliminating_residual_tumour_cells.png",
            post_destination: "/Posts/CAR-T-Cells-eliminating-residual-tumor-cells.html"
        },
        {
            title: "The Dopamine Hypothesis of Schizophrenia",
            subtitle: "",
            author: "Charvi Kashyap",
            author_contact: "",
            publish_date: "January 13, 2023",
            image_source: "the_dopamine_hypothesis.jpg",
            post_destination: "/Posts/The-dopamine-hypothesis-of-schizophrenia.html"
        },
        {
            title: "Radioactivity/ Radioactive Decay",
            subtitle: "A blessing and a threat to the world.",
            author: "Nour El Imane Toufiq",
            author_contact: "",
            publish_date: "January 12, 2023",
            image_source: "radioactivity.png",
            post_destination: "/Posts/radioactivity.html"
        },
        {
            title: "Project to Control Surgical Errors",
            subtitle: "",
            author: "Raushan Pandit",
            author_contact: "",
            publish_date: "December 20, 2022",
            image_source: "project_to_control_surgical_errors.png",
            post_destination: "/Posts/Project-to-control-surgical-errors.html"
        },
        {
            title: "Chaos Theory: The Three Body Problem",
            subtitle: "",
            author: "Ranica Chawla",
            author_contact: "",
            publish_date: "December 13, 2022",
            image_source: "three-body-problem.jpg",
            post_destination: "/Posts/Chaos-Theory-The-Three-Body-Problem.html"
        },
        {
            title: "What is the implication of dreaming?",
            subtitle: "",
            author: "Anel Mukatova",
            author_contact: "",
            publish_date: "November 19, 2022",
            image_source: "implications_of_dreaming.png",
            post_destination: "/Posts/What-are-implications-of-dreaming.html"
        },
        {
            title: "The impact of omega-3 and omega-6 fatty acids on depression",
            subtitle: "",
            author: "Saanika Agarwal",
            author_contact: "",
            publish_date: "November 18, 2022",
            image_source: "omega-3-and-omega-6-acids.jpg",
            post_destination: "/Posts/The-impact-of-omega-3-and-omega-6-fatty-acids-on-depression.html"
        },
        {
            title: "Application of Amino-Acid based Metabolites in Early Diagnosis of MS Patients",
            subtitle: "",
            author: "Fareen Momen",
            author_contact: "",
            publish_date: "November 12, 2022",
            image_source: "applications_of_amino_acid_based_metabolites.jpg",
            post_destination: "/Posts/Application-of-Amino-Acid-based-metabolites.html"
        },
        {
            title: "GABA Receptors and Neurosteroids Effect on Psychiatric Disorders",
            subtitle: "",
            author: "Sneha Ahuja",
            author_contact: "",
            publish_date: "November 4, 2022",
            image_source: "gaba_receptors_and_neurosteroids_effect.png",
            post_destination: "/Posts/GABA-Receptors-and-Neurosteroids-effect.html"
        },
        {
            title: "Imaging a Black Hole",
            subtitle: "",
            author: "Mohanad Ahmed Osman",
            author_contact: "",
            publish_date: "October 18, 2022",
            image_source: "imaging-a-black-hole.jpg",
            post_destination: "/Posts/Imaging-a-Black-Hole.html"
        },     
        {
            title: "Alzheimer’s Connection to Dysfunctional Immune System",
            subtitle: "",
            author: "Shrute Dayalan",
            author_contact: "",
            publish_date: "September 18, 2022",
            image_source: "alzheimer.png",
            post_destination: "/Posts/alzheimer.html"
        },
        {
            title: "Cell Structure",
            subtitle: "What are the fundamental units of life made of?",
            author: "Ngoc Tran Bui",
            author_contact: "",
            publish_date: "September 15, 2022",
            image_source: "Cell-Structure.png",
            post_destination: "/Posts/Cell-Structure.html"
        },
        {
            title: "Human Speech and Development",
            subtitle: "",
            author: "Mya Dias",
            author_contact: "",
            publish_date: "September 9, 2022",
            image_source: "human_speech_and_development.jpg",
            post_destination: "/Posts/Human-speech-and-development.html"
        },
        {
            title: "Nutrigenomics: An intro to this newly emerging field",
            subtitle: "",
            author: "Saanika Agarwal",
            author_contact: "",
            publish_date: "August 25, 2022",
            image_source: "nutrigenomics.png",
            post_destination: "/Posts/nutrigenomics.html"
        },
        {
            title: "The String Theory for babies",
            subtitle: "",
            author: "Swapnil k Singh",
            author_contact: "",
            publish_date: "August 25, 2022",
            image_source: "the_string_theory.png",
            post_destination: "/Posts/The-string-theory-for-babies.html"
        },
        {
            title: "Cloning Of Asiatic Lions In India - a solution or an even bigger problem?",
            subtitle: "",
            author: "Maahira Singh",
            author_contact: "",
            publish_date: "August 24, 2022",
            image_source: "Asiatic-Lion-Cloning.png",
            post_destination: "/Posts/Cloning-Of-Asiatic-Lions.html"
        },
        {
            title: "Genetic Basis of Behavior in Bipolar Disorder?",
            subtitle: "",
            author: "Arushi Verma",
            author_contact: "", 
            publish_date: "August 17, 2022",
            image_source: "Genetic-Basis-of-Behavior-in-Bipolar-Disorder.png",
            post_destination: "/Posts/Genetic-Basis-of-Behavior-in-Bipolar-Disorder.html"
        },
        {
            title: "Which personality is more successful: Type A or Type B?",
            subtitle: "",
            author: "Na'eema Baksh",
            author_contact: "", 
            publish_date: "August 15, 2022",
            image_source: "which_presonality_is_more_successful.png",
            post_destination: "/Posts/Which-personality-is-more-successful.html"
        },
        {
            title: "Wolbachia Vector Control",
            subtitle: "An impactful and successful technique to lower disease spread hidden in the shadows",
            author: "Tran Bui",
            author_contact: "", 
            publish_date: "August 11, 2022",
            image_source: "wolbachia.png",
            post_destination: "/Posts/wolbachia.html"
        },
        {
            title: "Economic and Environmental Impact of Medical Waste",
            subtitle: "",
            author: "Özge Özer",
            author_contact: "",
            publish_date: "August 8, 2022",
            image_source: "economic-and-environmental-impact-of-medical-waste.png",
            post_destination: "/Posts/economic-and-environmental-impact-of-medical-waste.html"
        },
        {
            title: "Why safe access to abortion is a necessity",
            subtitle: "",
            author: "Swati Singh",
            author_contact: "",
            publish_date: "August 6, 2022",
            image_source: "why_safe_abortion_is_necessity.png",
            post_destination: "/Posts/Why-safe-access-to-abortion-is-necessity"
        },
        {
            title: "Should We Believe In Darwin's Theory?",
            subtitle: "",
            author: "Laiba Ahsan",
            author_contact: "", 
            publish_date: "August 1, 2022",
            image_source: "should-we-belive-in-darwins-theory.jpg",
            post_destination: "/Posts/Should-We-Believe-In-Darwins-Theory.html"
        },
        {
            title: "What is Alternative Medicine?",
            subtitle: "",
            author: "Rohini Vummadi",
            author_contact: "", 
            publish_date: "August 1, 2022",
            image_source: "alternate_medicine.png",
            post_destination: "/Posts/alternative-medicine.html"
        },
        {
            title: "An Overview of the Curvy Spine: Scoliosis",
            subtitle: "",
            author: "Lilianne Achiaa Asokwah",
            author_contact: "",
            publish_date: "30 July, 2022",
            image_source: "an_overview_of_the_curvy_spine.png",
            post_destination: "/Posts/An-overview-of-the-curvy-spine-scoliosis"
        },
        {
            title: "Infectious Diseases: Deep Dive into the Body",
            subtitle: "How do the most infectious diseases invade and alter the body? Let’s dive into the cells!",
            author: "McKenzie Mote & Shamari Madkins",
            author_contact: "",
            publish_date: "July 28, 2022",
            image_source: "infectious_diseases_deep_dive_into_the_body.png",
            post_destination: "/Posts/Infectious-diseases-deep-dive-into-the-body"
        },
        {
            title: "How can Breast Milk Affect the Microbiome?",
            subtitle: "",
            author: "Arsa Satheeskumar",
            author_contact: "",
            publish_date: "July 26, 2022",
            image_source: "how_can_breast_milk_affect_the_biome.png",
            post_destination: "/Posts/How-can-breast-milk-affect-the-microbiome.html"
        },
        {
            title: "How Does DNA Work",
            subtitle: "",
            author: "Rohini Vummadi",
            author_contact: "",
            publish_date: "July 17, 2022",
            image_source: "how-does-dna-work.jpg",
            post_destination: "/Posts/How-Does-DNA-Work"
        },
        {
            title: "Understanding Cancer Biology with The Warburg Effect",
            subtitle: "Let's delve into how Warburg metabolism benefits cancer cells and fully characterizes their innate greed for glucose.",
            author: "Jared Ortiz-Luis",
            author_contact: "",
            publish_date: "July 17, 2022",
            image_source: "understanding_cancer_biology.png",
            post_destination: "/Posts/Understanding-Cancer-Biology"
        },
        {
            title: "Protein Folding",
            subtitle: "An often-overlooked procedure that rules our bodies.",
            author: "Ngoc Tran Bui",
            author_contact: "", 
            publish_date: "July 10, 2022",
            image_source: "protein_folding.avif",
            post_destination: "/Posts/Protein-folding.html"
        },
        {
            title: "Anatomy of the Human Body",
            subtitle: "12 systems: 1 system/article",
            author: "Rohini Vummadi",
            author_contact: "",
            publish_date: "July 8, 2022",
            image_source: "anatomy-of-the-human-body.jpeg",
            post_destination: "/Posts/Anatomy-of-the-Human-Body"
        },
        {
            title: "Naked Singularities: Could They Exist in Our Universe?",
            subtitle: "",
            author: "Ranica Chawla",
            author_contact: "", 
            publish_date: "July 7, 2022",
            image_source: "naked_singularities.png",
            post_destination: "/Posts/naked-singularities.html"
        },
        {
            title: "Biotechnology in the Recombinant Production of Synthetic Human Growth Hormone",
            subtitle: "",
            author: "Anna Pham",
            author_contact: "",
            publish_date: "July 6, 2022",
            image_source: "biotech-hormone.jpeg",
            post_destination: "/Posts/Biotechnology-in-the-Recombinant-Production-of-Synthetic-Human-Growth-Hormone"
        },
        {
            title: "&OpenCurlyDoubleQuote;From Our Perspective&CloseCurlyDoubleQuote;: The Impact of Recent School Shootings on Mental Health",
            subtitle: "How the recent school shootings have affected United States students' mental health, from students’ perspective.",
            author: "Alexa Cuvilly",
            author_contact: "",
            publish_date: "July 6, 2022",
            image_source: "effect_of_school_shooting_on_children.png",
            post_destination: "/Posts/From-Our-Prespective-the-impact-of-recent-school-shootings-on-mental-health.html"
        },
        {
            title: "Stellar Evolution",
            subtitle: "",
            author: "Deepthy Ajith K",
            author_contact: "",
            publish_date: "July 6, 2022",
            image_source: "stellar_evolution.png",
            post_destination: "/Posts/stellar-evolution"
        },
        {
            title: "Artificial Photosynthesis",
            subtitle: "",
            author: "Danika Chan",
            author_contact: "",
            publish_date: "July 4, 2022",
            image_source: "artificial-photosynthesis.png",
            post_destination: "/Posts/Artificial-Photosynthesis"
        },
        {
            title: "Active Galactic Nuclei: The Core of Galaxies",
            subtitle: "",
            author: "Luv Meena",
            author_contact: "",
            publish_date: "July 2, 2022",
            image_source: "active_galactic_nuclei.png",
            post_destination: "/Posts/Active-Galactic-Nuclei"
        },
        {
            title: "Dostarlimab; a saviour to rectal cancer",
            subtitle: "",
            author: "Ayana Samantray",
            author_contact: "",
            publish_date: "July 1, 2022",
            image_source: "dostarlimb_a_saviour_to_rectal_cancer.png",
            post_destination: "/Posts/Dostarlimab-a-saviour-to-rectal-cancer"
        },
        {
            title: "Spina Bifida",
            subtitle: "",
            author: "Ayana Samantray",
            author_contact: "",
            publish_date: "June 28, 2022",
            image_source: "spina_bifida.png",
            post_destination: "/Posts/Spina-bifida"
        },
        {
            title: "Aphantatic Artists: The Paradoxical Relationship Between Lack of Imagination and Artwork",
            subtitle: "",
            author: "Amna Eisa",
            author_contact: "",
            publish_date: "June 28, 2022",
            image_source: "aphantatic_artists_the_paradoxal_relation.png",
            post_destination: "/Posts/Aphantatic-artists-the-paradoxical-relationship-between-lack-of-imagination-and-artwork"
        },
        {
            title: "Delving into Black Holes",
            subtitle: "",
            author: "Deepthy Ajith K",
            author_contact: "",
            publish_date: "June 26, 2022",
            image_source: "delving_into_black_holes.png",
            post_destination: "/Posts/Delving-into-black-holes"
        },
        {
            title: "The Fourth Dimension: Beyond Visualization",
            subtitle: "",
            author: "Min Khant Oakkar",
            author_contact: "", 
            publish_date: "June 26, 2022",
            image_source: "the_fourth_dimension_beyond_visualization.png",
            post_destination: "/Posts/The-fourth-dimension-beyond-visualization"
        },
        {
            title: "Gravitational Lensing and its Applications",
            subtitle: "",
            author: "Deepthy Ajith K",
            author_contact: "",
            publish_date: "June 25, 2022",
            image_source: "gravitational_lensing_and_its_applications.png",
            post_destination: "/Posts/Gravitational-lensing-and-its-applications"
        },
        {
            title: "United States Socio-Political Deliberation on Decreasing CO<sub>2</sub> Emissions",
            subtitle: "",
            author: "Lakshya Jaikumar",
            author_contact: "", 
            publish_date: "June 16, 2022",
            image_source: "united_states_socio_politiclal_deliberation_on_decreasing_co2_emmisions.png",
            post_destination: "/Posts/United-states-socio-politiclal-deliberation-on-decreasing-co2-emmisions"
        },
        {
            title: "Signs of Liars",
            subtitle: "Often people lie to us these are a few ways to stop them.",
            author: "Juliana Russell",
            author_contact: "",
            publish_date: "June 8, 2022",
            image_source: "signs_of_liars.png",
            post_destination: "/Posts/Signs-of-liars"
        },
        {
            title: "Tumor-Hypoxia",
            subtitle: "",
            author: "Justina Lee",
            author_contact: "",
            publish_date: "June 8, 2022",
            image_source: "tumor_hypoxia.png",
            post_destination: "/Posts/Tumor-hypoxia"
        },
        {
            title: "Exploring Neurodegenerative Disease in the Context of American Football",
            subtitle: "Are the numerous severe neurological pathologies associated with this fan-favorite sport enough to convince government officials to set a minimum age requirement?",
            author: "Jared Ortiz-Luis",
            author_contact: "",
            publish_date: "June 8, 2022",
            image_source: "exploring_neurodegenerative_disease_in_the_context_of_american_football.png",
            post_destination: "/Posts/Exploring-neurodegenerative-disease-in-the-context-of-american-football"
        },
        {
            title: "A Drink Before Final Exams",
            subtitle: "“Got exam stress? Read this article”",
            author: "Emily Jia",
            author_contact: "",
            publish_date: "June 7, 2022",
            image_source: "a_drink_before_final_exams.png",
            post_destination: "/Posts/A-drink-before-final-exams"
        },
        {
            title: "The Universe : Infinite or Finite?",
            subtitle: "",
            author: "Yoav Greenberg",
            author_contact: "",
            publish_date: "June 7, 2022",
            image_source: "the_universe_finite_or_infinite.png",
            post_destination: "/Posts/The-universe-infinite-or-finite"
        },
        {
            title: "Dissecting the Brain",
            subtitle: "Learning about the different parts of the brain and what they are responsible for!",
            author: "Alexa Cuvilly",
            author_contact: "",
            publish_date: "June 7, 2022",
            image_source: "dissecting_the_brain.png",
            post_destination: "/Posts/Dissecting-the-brain"
        },
        {
            title: "Parasitic Pathogens and Their Inner-workings",
            subtitle: "Bacteria and viruses in action as the immune system goes on high alert.",
            author: "Ngoc Tran Bui",
            author_contact: "",
            publish_date: "June 5, 2022",
            image_source: "parasitic_pathogens_and_their_inner_workings.png",
            post_destination: "/Posts/Parasitic-pathogens-and-their-inner-workings"
        },
        {
            title: "The Concerning Effect the Omicron Variant Has on the COVID-19 Vaccine",
            subtitle: "The sequel to ‘The COVID-19 Vaccine is Not a Miracle Cure’",
            author: "Emily Jia",
            author_contact: "",
            publish_date: "May 31, 2022",
            image_source: "the_concerning_effect_the_omicron_variant_has_on_the_covid_19_vaccine.png",
            post_destination: "/Posts/The-concerning-effect-the-omicron-variant-has-on-the-covid-19-vaccine.html"
        },
        {
            title: "Peto’s paradox: A cure for cancer?",
            subtitle: "“History repeats, but science reverberates.”",
            author: "Sathya",
            author_contact: "",
            publish_date: "May 30, 2022",
            image_source: "petos_paradox_a_cure_for_cancer.png",
            post_destination: "/Posts/Petos-paradox-a-cure-for-cancer"
        },
        {
            title: "Health Effects of Mercury Poisoning",
            subtitle: "",
            author: "Min Khant Oakkar",
            author_contact: "", 
            publish_date: "May 27, 2022",
            image_source: "health_effects_of_mercury_poisoning.png",
            post_destination: "/Posts/Health-effects-of-mercury-poisoning"
        },
        {
            title: "How butterflies use jet propulsion for quick getaways",
            subtitle: "Have you ever wondered what role physics play in something as simple as a butterfly’s flight?",
            author: "Satinder Bamrah",
            author_contact: "",
            publish_date: "May 22, 2022",
            image_source: "how_butterflies_use_jet_propulsion_for_quick_getaways.png",
            post_destination: "/Posts/How-butterflies-use-jet-propulsion-for-quick-getaways"
        },
        {
            title: "Can Trauma Affect Our Genetics?",
            subtitle: "did you know you can pass down trauma to your kids?",
            author: "Almaas Ghafoor",
            author_contact: "",
            publish_date: "May 22, 2022",
            image_source: "can_trauma_affect_our_genetics.png",
            post_destination: "/Posts/Can-trauma-affect-our-genetics"
        },
        {
            title: "Angioplasty VS Stents",
            subtitle: "When combined, they have saved many lives. But how are they different from each other?",
            author: "Priya Bongu",
            author_contact: "",
            publish_date: "May 21, 2022",
            image_source: "angioplasty_vs_stents.png",
            post_destination: "/Posts/Angioplasty-vs-stents"
        },
        {
            title: "Alcoholism Drug Restores Vision Loss from Macular Degeneration and Retinitis Pigmentosa",
            subtitle: "A promising solution to these chronic, age-related eye diseases",
            author: "Viniya Kannangnatt",
            author_contact: "",
            publish_date: "May 21, 2022",
            image_source: "alcoholism_drug_restores_vision_loss.png",
            post_destination: "/Posts/Alcoholism-drug-restores-vision-loss"
        },
        {
            title: "The Unfolding of Liver Regeneration",
            subtitle: "Flesh regrown second by second right in front of our eyes.",
            author: "Ngoc Tran Bui",
            author_contact: "", 
            publish_date: "May 20, 2022",
            image_source: "the_unfolding_of_liver_regeneration.png",
            post_destination: "/Posts/The-unfolding-of-liver-regeneration"
        },
        {
            title: "CRISPR Gene Editing: A Potential Treatment?",
            subtitle: "Is it a promising cure for genetic diseases or is it the beginning of unnatural selection?",
            author: "Arsa Satheeskumar",
            author_contact: "", 
            publish_date: "May 20, 2022",
            image_source: "crispr_gene_editing_a_potential_treatment.png",
            post_destination: "/Posts/CRISPR-gene-editing-a-potential-treatment"
        },
        {
            title: "“Addiction: Our body loves an escape!”",
            subtitle: "Would you risk your family for a euphoric moment? My story with addiction and also the science behind it.",
            author: "McKenzie Mote",
            author_contact: "",
            publish_date: "May 20, 2022",
            image_source: "addiction_our_body_loves_an_escape.png",
            post_destination: "/Posts/Addiction-our-body-loves-an-escape"
        },
        {
            title: "Alice in Wonderland Syndrome",
            subtitle: "Appearances can be deceiving. Although there is no cure, it is one of the rarest diseases in the world.",
            author: "Anisha Patel",
            author_contact: "", 
            publish_date: "May 18, 2022",
            image_source: "alice_in_wonderland_syndrome.png",
            post_destination: "/Posts/Alice-in-wonderland-syndrome"
        },
        {
            title: "Music & The Brain: How do they Correlate and Why is it important?",
            subtitle: "Music is more than just a simple pastime. Check out how!",
            author: "Alexa Cuvilly",
            author_contact: "",
            publish_date: "May 18, 2022",
            image_source: "music_and_brain_correlation_and_importance.png",
            post_destination: "/Posts/Music-and-the-brain-correlation-and-importance"
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
            title: "How Viruses Give Insight to Human Physiology",
            subtitle: "Let's see what these micro-sized organisms tell us about ourselves.",
            author: "Jared Ortiz-Luis",
            author_contact: "",
            publish_date: "April 6, 2022",
            image_source: "viruses_give_insight_to_human_physiology.png",
            post_destination: "/Posts/How-viruses-give-insight-to-human-physiology"
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
    ],
    "tech": [
        {
            title: "Difference between Computer Science and IT",
            subtitle: "These two are some of the most easily confused carreer fields, here are the differences between them.",
            author: "Surayya Yuldashova",
            author_contact: "",
            publish_date: "January 14, 2023",
            image_source: "difference_between_it_and_cs.png",
            post_destination: "/Posts/Difference-between-computer-science-and-IT.html"
        },
        {
            title: "Applications Of Machine Learning in Healthcare",
            subtitle: "",
            author: "Jingran Yang",
            author_contact: "",
            publish_date: "November 3, 2022",
            image_source: "applications_of_ml_in_hc.png",
            post_destination: "/Posts/Applications-of-machine-learning.html"
        },
        {
            title: "Virtual Field Trips (VFTs)",
            subtitle: "Reflections on the Future of Virtual Reality in Education and the Possibilities of Change",
            author: "Aymen Jadda",
            author_contact: "",
            publish_date: "October 28, 2022",
            image_source: "virtual_field_trips.png",
            post_destination: "/Posts/Virtual-Field-Trips.html"
        },
        {
            title: "MedIm: Artificial Intelligence System for Pneumonia Detection",
            subtitle: "",
            author: "Nargiz Akhmetova",
            author_contact: "",
            publish_date: "October 24, 2022",
            image_source: "medlm_ai_system_for_pneumonia_detection.png",
            post_destination: "/Posts/MedIm-Artificial-Intelligence-System-for-Pneumonia-Detection.html"
        },
        {
            title: "Peering into the Potential of SETI",
            subtitle: "",
            author: "Deepthy Ajith K",
            author_contact: "",
            publish_date: "September 7, 2022",
            image_source: "seti.png",
            post_destination: "/Posts/seti.html"
        },
        {
            title: "How Machine Learning Can Aid the Visually Impaired",
            subtitle: "",
            author: "Julia Huang",
            author_contact: "",
            publish_date: "August 19, 2022",
            image_source: "how_machine_learning_can_aid_visually_impaired.png",
            post_destination: "/Posts/How-machine-learning-can-aid-the-visually-impaired.html"
        },
        {
            title: "A Guide to Ethical Hacking",
            subtitle: "",
            author: "Lighittha.P.R",
            author_contact: "",
            publish_date: "30 July, 2022",
            image_source: "a_guide_to_ethical_hacking.png",
            post_destination: "/Posts/A-guide-to-ethical-hacking"
        },
        {
            title: "Understanding Network Economics: From Basics to Applications",
            subtitle: "The era of efficient opportunities, investments, and capacity expansion of network industries has begun with the decision-making behavior in economics!",
            author: "Arushi Jain",
            author_contact: "", 
            publish_date: "June 26, 2022",
            image_source: "understanding_network_economics_from_basics_to_applications.png",
            post_destination: "/Posts/Understanding-network-economics-from-basics-to-applications"
        },
        {
            title: "Effects of Digital Divide on Education in India Amidst the Pandemic",
            subtitle: "",
            author: "Arushi Jain",
            author_contact: "",
            publish_date: "June 25, 2022",
            image_source: "effect_of_digital_divide_on_education.jpg",
            post_destination: "/Posts/Effects-of-digital-divide-on-education-in-india-amidst-the-pandamic"
        },
        {
            title: "Nuclear transmutation and how we can turn lead into gold",
            subtitle: "",
            author: "Shikha Bhayani",
            author_contact: "",
            publish_date: "June 6, 2022",
            image_source: "nuclear_transmutation_and_how_we_can_turn_lead_into_gold.png",
            post_destination: "/Posts/Nuclear-transmutation-and-how-we-can-turn-lead-into-gold"
        },
        {
            title: "How a Machine Learning Model Can Be Used to Detect Skin Cancer",
            subtitle: "",
            author: "Julia Huang",
            author_contact: "",
            publish_date: "June 5, 2022",
            image_source: "how_a_machine_learning_model_can_be_used_to_detect_skin_cancer.png",
            post_destination: "Posts/How-a-machine-learning-model-can-be-used-to-detect-skin-cancer"
        },
        {
            title: "The Relationship between Data Science and Childhood Obesity Cure",
            subtitle: "Say bye-bye to fat through these features of big data!",
            author: "Arushi Jain",
            author_contact: "", 
            publish_date: "May 25, 2022",
            image_source: "the_relationship_between_data_science_childhood_obesity_cure.png",
            post_destination: "/Posts/The-relationship-between-data-science-and-childhood-obesity-cure"
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
    ],
    "eng": [ 
        {
            title: "Kinematics in 1D Motion",
            subtitle: "Discovering Relationships Between Position, Velocity, and Acceleration",
            author: "Julia Huang",
            author_contact: "", // I personally dunno why does it even exists...
            publish_date: "November 7, 2022",
            image_source: "kinematics_in_1d_motion.png",
            post_destination: "/Posts/Kinematics-in-1D-motion.html"
        },
        {
            title: "Effective Project Management: Potential Cure for Stress and Depression in Construction and Engineering?",
            subtitle: "",
            author: "Asher Segun-Olasanmi",
            author_contact: "", 
            publish_date: "July 10, 2022",
            image_source: "effective_project_management.avif",
            post_destination: "/Posts/effective-project-management.html"
        },
        {
            title: "Progress In Diaster",
            subtitle: "Faults in Engineering Sector somethimes lead to Disasters, but should we simply blame engineering for that?",
            author: "Juliana Russell",
            author_contact: "",
            publish_date: "May 21, 2022",
            image_source: "progress_in_disaster.png",
            post_destination: "/Posts/Progress-in-disaster"
        },
        {
            title: "Inclusion in STEM: What’s Changed and What Hasn’t",
            subtitle: "“Girls aren’t built for engineering jobs. You can't do that.”<br><b>“Yes, I can!</b>”",
            author: "Asher Segun-Olasanmi",
            author_contact: "",
            publish_date: "May 21, 2022",
            image_source: "inclusion_in_stem_whats_changed_and_what_hasnt.png",
            post_destination: "/Posts/Inclusion-in-STEM-whats-changed-and-what-hasnt"
        },
    ],
    "math": [
        {
            title: "The Application of Sorting Algorithms in N-Dimensional Space",
            subtitle: "",
            author: "Christian Hall",
            author_contact: "",
            publish_date: " January 21, 2023",
            image_source: "the_application_of_sorting_algorithm.png",
            post_destination: "/Posts/The-application-of-sorting-algorithms-in-N-dimensional-space.html"
        },
        {
            title: "The Use of Mapping Elements",
            subtitle: "",
            author: "Uday Nambeesan",
            author_contact: "",
            publish_date: "January 20, 2023",
            image_source: "the_use_of_mapping_elements.png",
            post_destination: "/Posts/The-use-of-mapping-elements.html"
        },
        {
            title: "History of the Golden Ratio and Its Relation to Beauty",
            subtitle: "",
            author: "Min Khant Oakkar",
            author_contact: "",
            publish_date: "September 5, 2022",
            image_source: "History_of_golden_ratio.png",
            post_destination: "/Posts/History-of-golden-ratio-and-its-relation-to-beauty.html"
        },
        {
            title: "Reference Frames & Galileo Transformation Formulas",
            subtitle: "",
            author: "İdil Doğa Türkmen",
            author_contact: "",
            publish_date: "August 9, 2022",
            image_source: "reference_frames.png",
            post_destination: "/Posts/Reference-frames-and-galileo-transformation-formulas.html"
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
    ]
}

/* A chunk of random stuffs... */
const group_list = ["sci", "tech", "eng", "math"]
const corresp_post_cont_dict = {
    sci: document.getElementsByClassName("sci-body")[0],
    tech: document.getElementsByClassName("tech-body")[0],
    eng: document.getElementsByClassName("eng-body")[0],
    math: document.getElementsByClassName("math-body")[0],
};
const default_post_number = 6;
const Number_of_Posts = Post_List.length;
var rendered_posts = 0;

/* Function for rendering posts from the array (will be called on loading the page and when the 'Load More' button is clicked). */

function postRender(group, number) {
    renderedPosts = document.getElementsByClassName(`${group}-body`)[0].getElementsByClassName("post").length;
    maxPosts = Post_List[group].length;
    number = number + renderedPosts;
    if (number > maxPosts) {number = maxPosts};
    for (let i = renderedPosts; i < number; i++) {
        postContainer = corresp_post_cont_dict[group].getElementsByClassName("post-body")[0];
        postContainer.innerHTML += `<div class="post" style="width: 100%; display: table;  border-radius: 18px;">
                                        <div style="display: table-row;">
                                            <div class="image-holder">
                                                <img src="/assets/thumbnails/landscape/${Post_List[group][i].image_source}" class="preview-image" style="height: 138px; width: 138px; border-radius: 18px; position: relative; left: 0;"> <!--Image link to be pasted-->
                                            </div>
                                            <div class="post-preview-holder" style="display: table-cell">
                                                <div class="post-preview">
                                                    <a href="${Post_List[group][i].post_destination}"> <!--Redirect link source (to the destination post)-->
                                                        <h2 class="post-title">${Post_List[group][i].title}</h2> <!--Title of post-->
                                                        <h3 class="post-subtitle">${Post_List[group][i].subtitle}</h3> <!--Subtitle of post-->
                                                    </a>
                                                    <p class="post-meta">
                                                        Posted by
                                                        <a href="${Post_List[group][i].author_contact}">${Post_List[group][i].author}</a> <!--Author's Name-->
                                                        on ${Post_List[group][i].publish_date}<!--Date of publish-->
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
    };
    if (number == maxPosts) {document.getElementById(`${group}-load-more`).style.display = "none";}; // Remove the 'Load More' button when all available posts are rendered.
    resizeHandler(null); // In case the website is in portrait mode when the function was called.
}

// Calling the post render function to render the post on page load.
for (i in group_list) {postRender(group_list[i], default_post_number)}

function isArrayInArray(array, item){
    var item_as_string = JSON.stringify(item);
    var contains = array.some(function(ele){return JSON.stringify(ele) === item_as_string;});
    return contains;
}

function search_posts(query) {
    
    document.getElementById("search-results").innerHTML = "<p style='position-relative; left: 5%; margin: 9px 0;'><b>Results Found:</b> <span id='no-of-search-found'></span></p>";
    matches_found = []

    if (query != 0) {
        for (grIndex in group_list) {
            for (post_index in Post_List[group_list[grIndex]]) {
                for (keyword in Post_List[group_list[grIndex]][post_index]) {
                    if (!["image_source", "author_contact", "post_destination", "group"].includes(keyword)) {
                        if (Post_List[group_list[grIndex]][post_index][keyword].toLowerCase().includes(query.toLowerCase())) {
                            if (!isArrayInArray(matches_found, [grIndex, post_index])) {matches_found.push([grIndex, post_index])}
                        }
                    }
                }
            }
        }
    }
    for (post in matches_found) {
        postGroup = group_list[matches_found[post][0]]
        postIndex = matches_found[post][1]
        document.getElementById("search-results").innerHTML += `
            <div style="width: 100%; display: table;  border-radius: 18px;">
                <div style="display: table-row;">
                    <div class="res-image-holder">
                        <img src="../assets/thumbnails/landscape/${Post_List[postGroup][postIndex].image_source}" class="res-preview-image" style="height: 138px; width: 138px; border-radius: 18px; position: relative; left: 0;"> <!--Image link to be pasted-->
                    </div>
                    <div class="res-post-preview-holder" style="display: table-row">
                        <div class="post-preview">
                            <a href="${Post_List[postGroup][postIndex].post_destination}"> <!--Redirect link source (to the destination post)-->
                                <h2 class="post-title result-title">${Post_List[postGroup][postIndex].title}</h2> <!--Title of post-->
                                <h3 class="post-subtitle">${Post_List[postGroup][postIndex].subtitle}</h3> <!--Subtitle of post-->
                            </a>
                            <p class="post-meta">
                                Posted by
                                <a href="${Post_List[postGroup][postIndex].author_contact}">${Post_List[postGroup][postIndex].author}</a> <!--Author's Name-->
                                on ${Post_List[postGroup][postIndex].publish_date}<!--Date of publish-->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("search-results").innerHTML += "<hr>";
    document.getElementById("no-of-search-found").innerHTML = matches_found.length;
    resizeHandler(null);
}

resizeHandler(null)
