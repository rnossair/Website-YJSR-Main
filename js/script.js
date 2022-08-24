
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
        if (typeof matches_found !== 'undefined') {
            for (post_index in matches_found) {          
                document.getElementsByClassName("res-image-holder")[post_index].style = "display: table-row";
                document.getElementsByClassName("res-preview-image")[post_index].style = "width: 100%; border-radius: 18px";
                document.getElementsByClassName("res-preview-image")[post_index].src = "/assets/thumbnails/portrait/" + Post_List[matches_found[post_index]].image_source;
                document.getElementsByClassName("res-post-preview-holder")[post_index].style = "display: table-row";
            }
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
        if (typeof matches_found !== 'undefined') {
            for (post_index in matches_found) {          
                document.getElementsByClassName("res-image-holder")[post_index].style = "display: table-cell";
                document.getElementsByClassName("res-preview-image")[post_index].style = "height: 138px; width: 138px; border-radius: 18px";
                document.getElementsByClassName("res-preview-image")[post_index].src = "/assets/thumbnails/landscape/" + Post_List[matches_found[post_index]].image_source;
                document.getElementsByClassName("res-post-preview-holder")[post_index].style = "display: table-cell";
            }
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
        title: "Cloning Of Asiatic Lions In India - a solution or an even bigger problem?",
        subtitle: "",
        author: "Maahira Singh",
        author_contact: "",
        publish_date: "August 24, 2022",
        image_source: "Asiatic-Lion-Cloning.png",
        post_destination: "/Posts/Cloning-Of-Asiatic-Lions.html"
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
        title: "Genetic Basis of Behavior in Bipolar Disorder?",
        subtitle: "",
        author: "Arushi Verma",
        author_contact: "", // I personally dunno why does it even exists...
        publish_date: "August 17, 2022",
        image_source: "Genetic-Basis-of-Behavior-in-Bipolar-Disorder.png",
        post_destination: "/Posts/Genetic-Basis-of-Behavior-in-Bipolar-Disorder.html"
    },
    {
        title: "Which personality is more successful: Type A or Type B ?",
        subtitle: "",
        author: "Na'eema Baksh",
        author_contact: "", // I personally dunno why does it even exists...
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
        title: "Reference Frames & Galileo Transformation Formulas",
        subtitle: "",
        author: "İdil Doğa Türkmen",
        author_contact: "",
        publish_date: "August 9, 2022",
        image_source: "reference_frames.png",
        post_destination: "/Posts/Reference-frames-and-galileo-transformation-formulas.html"
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
        title: "A Guide to Ethical Hacking",
        subtitle: "",
        author: "Lighittha.P.R",
        author_contact: "",
        publish_date: "30 July, 2022",
        image_source: "a_guide_to_ethical_hacking.png",
        post_destination: "/Posts/A-guide-to-ethical-hacking"
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
        title: "Effective Project Management: Potential Cure for Stress and Depression in Construction and Engineering?",
        subtitle: "",
        author: "Asher Segun-Olasanmi",
        author_contact: "", 
        publish_date: "July 10, 2022",
        image_source: "effective_project_management.avif",
        post_destination: "/Posts/effective-project-management.html"
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
        title: "The Relationship between Data Science and Childhood Obesity Cure",
        subtitle: "Say bye-bye to fat through these features of big data!",
        author: "Arushi Jain",
        author_contact: "", 
        publish_date: "May 25, 2022",
        image_source: "the_relationship_between_data_science_childhood_obesity_cure.png",
        post_destination: "/Posts/The-relationship-between-data-science-and-childhood-obesity-cure"
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
                                                <img src="../assets/thumbnails/landscape/${Post_List[i].image_source}" class="preview-image" style="height: 138px; width: 138px; border-radius: 18px; position: relative; left: 0;"> <!--Image link to be pasted-->
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

function search_posts(query) {
    
    document.getElementById("search-results").innerHTML = "<p style='position-relative; left: 5%; margin: 9px 0;'><b>Results Found:</b> <span id='no-of-search-found'></span></p>";
    matches_found = []

    if (query != 0) {
        for (post_index in Post_List) {
            for (keyword in Post_List[post_index]) {
                if (!["image_source", "author_contact", "post_destination"].includes(keyword)) {
                    if (Post_List[post_index][keyword].toLowerCase().includes(query.toLowerCase())) {
                        if (!matches_found.includes(post_index)) {matches_found.push(post_index)}
                    }
                }
            }
        }
    }
    for (post_index in matches_found) {
        document.getElementById("search-results").innerHTML += `
            <div style="width: 100%; display: table;  border-radius: 18px;">
                <div style="display: table-row;">
                    <div class="res-image-holder">
                        <img src="../assets/thumbnails/landscape/${Post_List[matches_found[post_index]].image_source}" class="res-preview-image" style="height: 138px; width: 138px; border-radius: 18px; position: relative; left: 0;"> <!--Image link to be pasted-->
                    </div>
                    <div class="res-post-preview-holder" style="display: table-row">
                        <div class="post-preview">
                            <a href="${Post_List[matches_found[post_index]].post_destination}"> <!--Redirect link source (to the destination post)-->
                                <h2 class="post-title result-title">${Post_List[matches_found[post_index]].title}</h2> <!--Title of post-->
                                <h3 class="post-subtitle">${Post_List[matches_found[post_index]].subtitle}</h3> <!--Subtitle of post-->
                            </a>
                            <p class="post-meta">
                                Posted by
                                <a href="${Post_List[matches_found[post_index]].author_contact}">${Post_List[matches_found[post_index]].author}</a> <!--Author's Name-->
                                on ${Post_List[matches_found[post_index]].publish_date}<!--Date of publish-->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("search-results").innerHTML += "<hr>";
    document.getElementById("no-of-search-found").innerHTML = matches_found.length;
    Resize_Handler(null);
}

Resize_Handler(null);
