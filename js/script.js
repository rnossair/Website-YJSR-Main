let tabHeader = document.getElementsByClassName("tab-bar")[0];
let tabIndicator = document.getElementsByClassName("indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
matches_found = [];

for (let i = 0; i < tabsPane.length - 1; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].style = "color: #313131";
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabIndicator.style = `left: calc(50% - 360px + (180px * ${i}));`;
    tabsPane[i].classList.add("active");
    tabsPane[i].style = "color: #0085A1";
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByClassName("tb")[i].classList.add("active");
  });
}

/* Responsible for switching post-structure between landscape and portrait mode. */
var Win_Width = window.innerWidth || document.body.clientWidth;
window.addEventListener("resize", resizeHandler, false);

function resizeHandler(event) {
  winWidth = window.innerWidth || document.body.clientWidth;
  if (winWidth < 992) {
    for (grIndex in group_list) {
      var postContainer = corresp_post_cont_dict[group_list[grIndex]];
      var htmlPostList = postContainer.getElementsByClassName("post");
      var len = htmlPostList.length;
      for (var i = 0; i < len; i++) {
        postContainer.getElementsByClassName("image-holder")[i].style =
          "display: table-row";
		postContainer.getElementsByClassName("preview-image")[i].style.width = "100%";
		postContainer.getElementsByClassName("preview-image")[i].style.height = "270px";
        postContainer.getElementsByClassName("post-preview-holder")[i].style =
          "display: table-row";
      }
    }
    for (i = 0; i < matches_found.length; i++) {
      var postGroup = group_list[matches_found[i][0]];
      var resultsContainer = document.getElementById("search-results");
      var Post = Post_List[postGroup][matches_found[i][1]];
      resultsContainer.getElementsByClassName("res-image-holder")[i].style =
        "display: table-row";
	  resultsContainer.getElementsByClassName("res-preview-image")[i].style.width = "100%";
	  resultsContainer.getElementsByClassName("res-preview-image")[i].style.height = "270px";
      resultsContainer.getElementsByClassName("res-post-preview-holder")[
        i
      ].style = "display: table-row";
    }
  } else {
    for (grIndex in group_list) {
      var postContainer = corresp_post_cont_dict[group_list[grIndex]];
      var htmlPostList = postContainer.getElementsByClassName("post");
      var len = htmlPostList.length;
      for (var i = 0; i < len; i++) {
        postContainer.getElementsByClassName("image-holder")[i].style =
          "display: table-cell";
		postContainer.getElementsByClassName("preview-image")[i].style.height = "138px";
		postContainer.getElementsByClassName("preview-image")[i].style.width = "138px";
        postContainer.getElementsByClassName("post-preview-holder")[i].style =
          "display: table-cell";
      }
    }
    for (i = 0; i < matches_found.length; i++) {
      var postGroup = group_list[matches_found[i][0]];
      var resultsContainer = document.getElementById("search-results");
      var Post = Post_List[postGroup][matches_found[i][1]];
      resultsContainer.getElementsByClassName("res-image-holder")[i].style =
        "display: table-cell";
      resultsContainer.getElementsByClassName("res-preview-image")[i].style.height = "138px";
	  resultsContainer.getElementsByClassName("res-preview-image")[i].style.width = "138px";
      resultsContainer.getElementsByClassName("res-post-preview-holder")[
        i
      ].style = "display: table-cell";
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
        publish_date: "", // Use online link or for offline link, place the image file at '../assets/thumbnails/'
        image_source: "",
        post_destination: ""
    },
*/

// Array responsible for storing post information and details.

const Post_List = {

	"sci": [
		{
			title: "Adolescent Female Genital Mutilation",
			subtitle: "Cutting Through Taboos: Examining Adolescent Female Genital Mutilation from a Scientific Perspective.",
			author: "Patricia Zhang",
			author_contact: "", 
			publish_date: "September 6, 2023",
			image_source: "https://images.unsplash.com/photo-1621097211242-118d6c63e4fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
			post_destination: "/Posts/adolescent-female-genital-mutilation.html"
		},
		{
      title: "Hycean Planets",
      subtitle: "The Cosmic Oceans, Exploring Alien life in worlds of water",
      author: "Aditya Singh",
      author_contact: "",
      publish_date: "September 4, 2023",
      image_source:
        "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/Hycean-Planets.html",
    },
		
      {
            title: "Transforming Skin Cells into Pluripotent Marvels",
            subtitle: "",
            author: "Aadesh Taneja",
            author_contact: "", // I personally dunno why does it even exists...
            publish_date: "August 31, 2023",
            image_source: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            post_destination: "/Posts/Transforming_Skin_Cells_into_Pluripotent_Marvels.html"
     },
		 {
      title: "Precision Oncology",
      subtitle: "Target Therapy For Cancer",
      author: "Niki Zafar Heidari",
      author_contact: "",
      publish_date: "August 29, 2023",
      image_source:
        "https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/Precision-Oncology.html",
    },
		{
      title: "   HOW DOES BLOOD CLOT",
      subtitle: " HOW DO BLOOD COAGULATION TESTS WORK?",
      author: " Zehra Polat",
      author_contact: "",
      publish_date: "August 28, 2023",
      image_source:
        "https://images.pexels.com/photos/6643064/pexels-photo-6643064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/How-does-blood-clot.html",
    },
		 {
      title: "AOH 1996: A Potential Cure for Cancer?",
      subtitle: "",
      author: "Mridul Yadav",
      author_contact: "",
      publish_date: "August 27, 2023",
      image_source:
        "https://metro.co.uk/wp-content/uploads/2023/08/GettyImages-1477214805.jpg?quality=90&strip=all&crop=0px%2C21px%2C777px%2C408px&resize=1200%2C630",
      post_destination:
        "/Posts/AOH -1996-Cure-for-Cancer.html",
    },
		 {
      title: "Exoplanets",
      subtitle: "Hidden Worlds Beyond the Solar System",
      author: "Shreya Bose",
      author_contact: "",
      publish_date: "August 25, 2023",
      image_source:
        "https://th.bing.com/th/id/OIP.wmNmLc57uNa75VnQ2gQO5wHaFj?pid=ImgDet&rs=1",
      post_destination:
        "/Posts/Exoplanets-Hidden-Worlds-Beyond-the-Solar-System.html",
    },
		{
      title: "The Mind: A Complex Interplay of Biology and Computing",
      subtitle: "",
      author: "Ashley Lim",
      author_contact: "",
      publish_date: "August 24, 2023",
      image_source:
        "https://media.licdn.com/dms/image/D4E12AQEQ8mA50x96dQ/article-cover_image-shrink_720_1280/0/1687852679542?e=2147483647&v=beta&t=TRUp3gbf3dK-Vna-plZwk0gRKvQxAEHkFodYxHgWXp0",
      post_destination: "/Posts/The-Mind-A-Complex-Interplay.html"
    },
		 {
      title: "CLI-TIDE CHANGE",
      subtitle: "",
      author: "Avni Munjal",
      author_contact: "",
      publish_date: "August 21, 2023",
      image_source:
        "https://images.pexels.com/photos/1271858/pexels-photo-1271858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/CLI-TIDE-CHANGE.html",
    },
  {
      title: "The Many Worlds Interpretation",
      subtitle: "",
      author: "Ishika Sinha",
      author_contact: "",
      publish_date: "August 20, 2023",
      image_source:
        "https://i.pinimg.com/originals/9c/29/04/9c29041058484ff2061653fcaf81fd7f.jpg",
      post_destination: "/Posts/Many-worlds.html",
    },
		{
			title: "Stem Cell Therapy As An Effective Treatment For Chronic Obstructive Pulmonary Disease",
			subtitle: "",
			author: "Laura Diaz-Oviedo, Halimat Houandje, Tamkeen Ashraf, Varshini Sudhakar, Opemipo Banwo & Faizah Z. Mosharraf",
			author_contact: "",
			publish_date: "August 20, 2023",
			image_source: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
			post_destination: "/Posts/Stem-cell-therapy-as-an-effective-treatment-for-COPD.html"
		},
		 {
      title: "The Principles of Quantum Mechanics",
      subtitle: "Unveiling the Subatomic World",
      author: "Afreen Hossain",
      author_contact: "https://www.linkedin.com/in/afreen-hossain/",
      publish_date: "August 20, 2023",
      image_source:
        "https://th.bing.com/th/id/R.50268f85e67ab5166fbc11ff95fc153b?rik=O1r2YixKJRzWeA&riu=http%3a%2f%2fwww.lehman.edu%2ffaculty%2fanchordoqui%2f300.jpg&ehk=FTZGlU%2fCjTR1SGBBn%2bSTYQXnEf5dec2OIXBzldxQRv4%3d&risl=&pid=ImgRaw&r=0",
      post_destination: "/Posts/Quantum-Mech.html",
    },
		{
			title: "The Overlooked Battle",
			subtitle: "Addressing the Harsh Reality of Mental Health in Morocco",
			author: "Yousra Oualiyouddine",
			author_contact: "", 
			publish_date: "August 20, 2023",
			image_source: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			post_destination: "/Posts/The-Overlooked-Battle.html"
		},
		{
        title: "Leptin: the obesity gene",
        subtitle: "",
        author: "Aditya Singh",
        author_contact: "",
        publish_date: "August 20, 2023", 
        image_source: "https://cdn1.sinobiological.com/styles/default/images/protein-structure/LEP-protein-structure.jpg",
        post_destination: "/Posts/Leptin-the-obesity-gene.html"
    },
		{
        title: "Psychology behind Helping behavior",
        subtitle: "",
        author: "Jiji Subhan",
        author_contact: "",
        publish_date: "August 16, 2023", 
        image_source: "https://psychology.iresearchnet.com/wp-content/uploads/2016/01/Helping-Behavior.jpg",
        post_destination: "/Posts/Psychology-behind-Helping-behavior.html"
    },
		    {
      title: "Lessons Learned From Covid-19",
      subtitle: "A Global Crisis, A Global Response",
      author: "Kamal Korrapati ",
      author_contact: "",
      publish_date: "August 15, 2023",
      image_source:
        "https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-02/coronavirus-creativeneko-shutterstock-com.jpg?h=111de37a&itok=rKlnOnPt",
      post_destination: "/Posts/Lessons-learnt-from-covid.html",
    },
		 {
      title: "Biomimicry",
      subtitle: "From Inspiration To Innovation",
      author: "Swarne Sre",
      author_contact: "",
      publish_date: "August 15, 2023",
      image_source:
        "https://d2vvqscadf4c1f.cloudfront.net/fEhLoqQBSbi6rWwmOTlQ_nautilus-cutaway-shell.jpg",
      post_destination: "/Posts/Biomimicry-From-Inspiration-To-Innovation.html",
    },
		{
			title: "Emergence of Artificial Photosynthesis",
			subtitle: "An Environmentally Sustainable and Efficient Method for Energy Production",
			author: "Ryan Parsaee & Nikhil Kotikalapudi",
			author_contact: "",
			publish_date: "August 12, 2023",
			image_source: "https://images.unsplash.com/photo-1544465259-ac6ecd37db70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			post_destination: "/Posts/Emergence-of-artificial-photosynthesis.html"
		},
		{
			title: "Exploring the Racial Health Disparities in the United States",
			subtitle: "Can race determine your health?",
			author: "Jared Ortiz-Luis",
			author_contact: "", 
			publish_date: "August 11, 2023", 
			image_source: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			post_destination: "/Posts/Exploring-the-racial-health-disparities-in-the-United-States.html"
		},
		{
			title: "Use It Or Lose It Strategy - How Neurons Work",
			subtitle: "Unraveling the Intricacies of Cognitive Function and Neural Adaptation",
			author: "Emel Çırakoğlu",
			author_contact: "",
			publish_date: "August 11, 2023", 
			image_source: "https://images.unsplash.com/photo-1664447972862-e26efc5b709f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
			post_destination: "/Posts/Use-it-or-lose-it-strategy-how-neurons-work.html"
		},
		{
			"title": "Exploring the Enigma of Wave-Particle Duality in Quantum Mechanics",
			"subtitle": "Journey into Quantum Mechanics' Wave-Particle Enigma",
			"author": "Mohammed Ayaan",
			"author_contact": "",
			"publish_date": "August 7, 2023",
			"image_source": "https://images.unsplash.com/photo-1677108167538-f34574c6c651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
			"post_destination": "Posts/Exploring the Enigma of Wave-Particle Duality in Quantum Mechanics.html"
		},
		{
			"title": "History of Quantum Mechanics",
			"subtitle": "Exploring the Fascinating History of Quantum Mechanics",
			"author": "Mohammed Ayaan",
			"author_contact": "",
			"publish_date": "August 6, 2023",
			"image_source": "https://images.pexels.com/photos/7723393/pexels-photo-7723393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/history-quantum-mech.html"
		},
		{
			"title": "The Relationship Between Environmental Toxins and Parkinson’s Disease",
			"subtitle": "Unmasking the Hidden Threat about Parkinson's disease",
			"author": "Vyasa Hari",
			"author_contact": "",
			"publish_date": "August 6, 2023",
			"image_source": "https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/Environmental-Toxins-and-Parkinson’s-Disease.html"
		},
		{
			"title": "Rewilding the Earth",
			"subtitle": "A necessary path to a better tomorrow",
			"author": "Xyrene Amansec",
			"author_contact": "",
			"publish_date": "August 5, 2023",
			"image_source": "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/A-necessary-path-to-better-tomorrow.html"
		},
		{
			"title": "Stars",
			"subtitle": "The death and birth of stars",
			"author": "Nour Al Imane TOUFIQ",
			"author_contact": "",
			"publish_date": "August 5, 2023",
			"image_source": "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/The-death-and-birth-of-stars.html"
		},
		{
			"title": "Ethics vs Advancement",
			"subtitle": "A Delicate Balance Between Progress and Responsibility",
			"author": "Jan Zanne Chua",
			"author_contact": "",
			"publish_date": "July 23, 2023",
			"image_source": "https://images.unsplash.com/photo-1631557676757-fcc7b1160be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1191&q=80",
			"post_destination": "/Posts/Ethics-vs-Advancements.html"
		},
		{
			"title": "Stem cells: The Answer To Cancer?",
			"subtitle": "The Answer to Cancer We’ve Been Waiting For? A Deep Dive into the Latest Breakthroughs",
			"author": "Tamera Simon",
			"author_contact": "",
			"publish_date": "July 23, 2023",
			"image_source": "https://images.unsplash.com/photo-1629721270535-c67f2ab1243c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Stem-Cells-the-answer-to-cancer.html"
		},
		{
			"title": "Impacts of second hand smoking on household plants",
			"subtitle": "",
			"author": "Fareeha Rehman",
			"author_contact": "",
			"publish_date": "July 16, 2023",
			"image_source": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
			"post_destination": "/Posts/Impacts_of_second_hand_smoking_on_household_plants.html"
		},
		{
			"title": "Understanding Keto Dieting for Vegetarians?",
			"subtitle": "",
			"author": "Vyasa Hari",
			"author_contact": "",
			"publish_date": "July 2, 2023",
			"image_source": "https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			"post_destination": "/Posts/Understanding_Keto_Dieting_for_Vegetarians.html"
		},
		{
			"title": "STEM Education: Empowering a Transformed Future in an Ever-Evolving World",
			"subtitle": "",
			"author": "Afreen Hossain",
			"author_contact": "",
			"publish_date": "June 30, 2023",
			"image_source": "https://yetiacademy.com/wp-content/uploads/2022/04/why-is-stem-important-in-elementary-scaled-d.jpg",
			"post_destination": "/Posts/Empowering-Transformed-Future-in-Ever-Evolving-World.html"
		},
		{
			"title": "Evolution: a Law or a Theory?",
			"subtitle": "",
			"author": "Mina Akın",
			"author_contact": "",
			"publish_date": "June 26, 2023",
			"image_source": "https://assets.answersingenesis.org/img/cms/content/contentnode/header_image/theory-of-evolution.jpg",
			"post_destination": "/Posts/Evolution-Law-or-Theory.html"
		},
		{
			"title": "The Adderall Problem: A Therapeutic Dilemma",
			"subtitle": "Balancing Focus and Consequences: Exploring the Complexities of Adderall Use in Therapeutic Contexts.",
			"author": "Kate Rutter",
			"author_contact": "",
			"publish_date": "June 25, 2023",
			"image_source": "https://images.unsplash.com/photo-1562411053-c9ac630a5934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
			"post_destination": "/Posts/The-adderall-problem.html"
		},
		{
			"title": "Global Warming And Its Impact On The Phenology Of Birds And Other Wildlife",
			"subtitle": "Shifting Rhythms of Life: Investigating the Influence of Global Warming on Wildlife Phenology and Ecosystem Dynamics.",
			"author": "Xyrene Amansec",
			"author_contact": "",
			"publish_date": "June 25, 2023",
			"image_source": "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Global-warming-and-its-impact-on-the-phenology-of-birds-and-other-wildlife.html"
		},
		{
			"title": "Anthropogenic Habitat Alteration and the Demographic Decline of Scantius Aegyptius",
			"subtitle": "The Human Footprint on Scantius Aegyptius: Investigating the Ecological Consequences of Anthropogenic Habitat Alteration.",
			"author": "Rithvik Sabnekar",
			"author_contact": "https://www.linkedin.com/in/rithvik-sabnekar-1971a3266/",
			"publish_date": "June 19, 2023",
			"image_source": "../assets/thumbnails/anthropogenic_habitat_alteration_and_the_demographic_decline_of_scantius_aegyptius.png",
			"post_destination": "/Posts/Anthropogenic-habitat-alteration-and-the-demographic-decline-of-scantius-aegyptius.html"
		},
		{
			"title": "Rewiring Resilience",
			"subtitle": "How Neuroplasticity Helps the Brain Heal from PTSD",
			"author": "Aadrika Maurya",
			"author_contact": "",
			"publish_date": "June 18, 2023",
			"image_source": "../assets/thumbnails/rewiring_resilience.jpg",
			"post_destination": "/Posts/Rewiring-Resilience.html"
		},
		{
			"title": "Designer Babies: Creating a Better Generation, Or Not?",
			"subtitle": "",
			"author": "Emel Çırakoğlu",
			"author_contact": "",
			"publish_date": "June 16, 2023",
			"image_source": "https://www.verywellhealth.com/thmb/G3Cy3e_pnLupt1qbXBj3Im9XX7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1288913695-230c3b035bce4442b29e1598a492022d.jpg",
			"post_destination": "/Posts/Designer_Babies-_Creating_A_Better_Generation_Or_Not"
		},
		{
			"title": "The Etiology and Treatment of Preeclampsia Among Pregnant Women",
			"subtitle": "Together let’s explore the complex biological mechanisms and treatments of one of the most notorious pathologies in the field of maternal-fetal medicine.",
			"author": "Jared Ortiz-Luis",
			"author_contact": "",
			"publish_date": "June 14, 2023",
			"image_source": "https://images.unsplash.com/photo-1638272467190-4ff6f773315c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80",
			"post_destination": "/Posts/The-Ethiology-and-Treatment-of-Preeclampsia-among-pregnant-women.html"
		},
		{
			"title": "Music as Informational Art: Debunking the Myth of 'Informative Garbage'",
			"subtitle": "",
			"author": "Anel Mukatova",
			"author_contact": "",
			"publish_date": "June 13, 2023",
			"image_source": "https://d1zdxptf8tk3f9.cloudfront.net/articles/1480/large_cropped/esther_loopstra_3_-_Esther_Loopstra.jpg",
			"post_destination": "/Posts/Music-Informational-Art.html"
		},
		{
			"title": "Honey Water and Fertilizer Effect on Plant Growth",
			"subtitle": "",
			"author": "Chloe LaForge",
			"author_contact": "",
			"publish_date": "June 9, 2023",
			"image_source": "https://andersonscanada.com/wp-content/uploads/2014/10/Kdefcorn-845x321.jpg",
			"post_destination": "/Posts/Honey-Water-and-Fertilizer-Effect-on-Plant-Growth.html"
		},
		{
			"title": "The Silent Threat: Unveiling the Connection Between Air Pollution and Mental Health",
			"subtitle": "",
			"author": "Ashley Lim",
			"author_contact": "",
			"publish_date": "June 7, 2023",
			"image_source": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Connection-Between-Air-Pollution-and-Mental-Health.html"
		},
		{
			"title": "Effects of Water and Baking Soda on Plant Oxidation Rates",
			"subtitle": "",
			"author": "Chloe LaForge",
			"author_contact": "",
			"publish_date": "June 5, 2023",
			"image_source": "https://images.unsplash.com/photo-1461230185679-aad82a673415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
			"post_destination": "/Posts/Effects-of-water-and-baking-soda-on-plant-oxidation-rates.html"
		},
		{
			"title": "The Invisible Universe",
			"subtitle": "Uncovering the Mysteries and Wonders of Dark Matter",
			"author": "Fareeha Rehman",
			"author_contact": "",
			"publish_date": "May 29, 2023",
			"image_source": "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The-invisible-universe-uncovering-the-mysteries-and-wonders-of-dark-matter.html"
		},
		{
			"title": "Unlocking the Mysteries of Oncogenes: How These Genetic Rebels Drive Cancer",
			"subtitle": "Decoding Oncogenes' Dominance in Cancer Pathways.",
			"author": "Sindhoora R.",
			"author_contact": "",
			"publish_date": "May 15, 2023",
			"image_source": "https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg",
			"post_destination": "/Posts/Unlocking-the-mysteries-of-oncogenes.html"
		},
		{
			"title": "What is Gillick Competence and how did it originate?",
			"subtitle": "",
			"author": "Varya Mishra",
			"author_contact": "",
			"publish_date": "May 15, 2023",
			"image_source": "https://i0.wp.com/sportsmedicineweekly.com/wp-content/uploads/2021/06/gillick2.jpg?fit=840%2C560&ssl=1",
			"post_destination": "/Posts/Gillick-Competence.html"
		},
		{
			"title": "The Truth About Bioweapons: The Science Behind Biological Destruction",
			"subtitle": "Uncovering the Secrets of Bioweapons: Analyzing the Mechanisms and Consequences of Biological Warfare.",
			"author": "Anya Trivedi",
			"author_contact": "",
			"publish_date": "May 14, 2023",
			"image_source": "https://cdn.pixabay.com/photo/2021/04/14/15/45/biohazard-6178727_960_720.jpg",
			"post_destination": "/Posts/The-truth-about-bioweapons.html"
		},
		{
			"title": "The New Era of Gravitational-Wave Astronomy",
			"subtitle": "",
			"author": "Adriana Talianová",
			"author_contact": "",
			"publish_date": "May 10, 2023",
			"image_source": "https://cdn.mos.cms.futurecdn.net/iFfTjYRJ7W36v95EpZziPh-970-80.jpg.webp",
			"post_destination": "/Posts/Gravitational-Wave-Astronomy.html"
		},
		{
			"title": "The Matilda effect",
			"subtitle": "",
			"author": "Maria Eduarda de Mattos Brandão",
			"author_contact": "",
			"publish_date": "May 7, 2023",
			"image_source": "https://www.um.edu.mt/__data/assets/image/0006/460176/matildathumb.png",
			"post_destination": "/Posts/the-matilda-effect.html"
		},
		{
			"title": "The Axolotl: An Intriguing Pokémon",
			"subtitle": "Some might find it cute, some might find it weird, but its regenerative abilities are undeniably and scientifically fascinating.",
			"author": "Maria Eduarda de Mattos Brandão",
			"author_contact": "",
			"publish_date": "May 2, 2023",
			"image_source": "https://cdn.pixabay.com/photo/2020/07/17/20/25/axolotl-5415386_960_720.jpg",
			"post_destination": "/Posts/The-Axolotl-an-intriguing-Pokemon.html"
		},
		{
			"title": "The psychology behind plastic surgery",
			"subtitle": "Why do we resolutely change ourselves? And how do the people who perform these surgeries feel?",
			"author": "Bargaoui Elaa",
			"author_contact": "",
			"publish_date": "April 30, 2023",
			"image_source": "https://s3.amazonaws.com/cdn.newyorkfacialplasticsurgery.com/images/twilight-anesthesia.jpg",
			"post_destination": "/Posts/The-psychology-behind-plastic-surgery.html"
		},
		{
			"title": "Neuroplasticity",
			"subtitle": "Exploring the Brain's Remarkable Ability to Adapt and Learn through Neuroplasticity",
			"author": "Charvi Kashyap",
			"author_contact": "",
			"publish_date": "April 24, 2023",
			"image_source": "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
			"post_destination": "/Posts/Neuroplasticity.html"
		},
		{
			"title": "Horaglanis populi: A Newly Discovered Species",
			"subtitle": "",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "April 20, 2023",
			"image_source": "https://cavefishes.org.uk/fish-images/165_1519389731.jpg",
			"post_destination": "/Posts/horaglanis-populi.html"
		},
		{
			"title": "Love From The Biological Perspective",
			"subtitle": "Love is a Drug: How Hormones and Neurotransmitters create Addiction and Euphoria...",
			"author": "Vincent Hui",
			"author_contact": "",
			"publish_date": "April 10, 2023",
			"image_source": "https://images.unsplash.com/photo-1580756338357-a0ba1932d879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Love-from-the-biological-perspective.html"
		},
		{
			"title": "How the Brain Processes Music: Insights from Neuroscience",
			"subtitle": "Unraveling the Mysteries of the Musical Mind: A Neuroscientific Perspective",
			"author": "Aadrika Maurya",
			"author_contact": "",
			"publish_date": "April 10, 2023",
			"image_source": "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/How-the-brain-processes-music.html"
		},
		{
			"title": "The NANOG Gene: A Potential for Age-Reversal",
			"subtitle": "Revitalizing the Body's Cells with NANOG Gene Therapy: A Breakthrough in Anti-Aging Research",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "April 1, 2023",
			"image_source": "../assets/thumbnails/the_nanog_gene.jpg",
			"post_destination": "/Posts/The-NANOG-gene-a-potential-for-age-reversal.html"
		},
		{
			"title": "The Ethics of Human Cloning",
			"subtitle": "Unpacking the Possibilities and Challenges of Human Cloning in the Modern Age",
			"author": "Aadrika Maurya",
			"author_contact": "",
			"publish_date": "March 29, 2023",
			"image_source": "https://images.unsplash.com/photo-1577285930803-df9418bede68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80",
			"post_destination": "/Posts/The-ethics-of-human-cloning.html"
		},
		{
			"title": "Paraneoplastic Syndrome",
			"subtitle": "Decoding the Enigmatic Symptoms of Cancer's Secret Companion",
			"author": "Ayana Samantray",
			"author_contact": "",
			"publish_date": "March 23, 2023",
			"image_source": "../assets/thumbnails/paraneoplastic_syndrome.png",
			"post_destination": "/Posts/Paraneoplastic-syndrome.html"
		},
		{
			"title": "What Are BrainEx and OrganEx?",
			"subtitle": "",
			"author": "Adrianna Cirillo",
			"author_contact": "",
			"publish_date": "March 19, 2023",
			"image_source": "https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-organex_-_schematic_2.jpg?itok=6cQCUCk-&c=c381959abddab373ac2bfefa67ecbfb9",
			"post_destination": "/Posts/brainEX-organEX.html"
		},
		{
			"title": "Exploring the Ethics of Art",
			"subtitle": "Looking into the questions regarding the Appropriation, Authorship, and Accountability of Art generated by Artificial Intelligence and finding answers to them.",
			"author": "Armish Shayan",
			"author_contact": "",
			"publish_date": "March 5, 2023",
			"image_source": "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
			"post_destination": "/Posts/Exploring-the-ethics-of-art-Appropriation-Authorship-Accountability.html"
		},
		{
			"title": "Mice Combat: Mirror Neurons Are To Blame",
			"subtitle": "",
			"author": "Mice Combat: Mirror Neurons Are To Blame",
			"author_contact": "",
			"publish_date": "February 28, 2023",
			"image_source": "https://neurosciencenews.com/files/2023/02/mouse-mirror-neuron-aggression-neurosicences-public.jpg",
			"post_destination": "/Posts/mice-combact.html"
		},
		{
			"title": "Scientists use plasma to produce oxygen on Mars",
			"subtitle": "Are we one step closer to living on the red planet?",
			"author": "Maria Eduarda de Mattos Brandão",
			"author_contact": "",
			"publish_date": "February 28, 2023",
			"image_source": "https://images.unsplash.com/photo-1607354175781-c03c7b8b0f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
			"post_destination": "/Posts/Scientists-use-plasma-to-produce-oxygen-on-mars.html"
		},
		{
			"title": "How an Alligator Gene in Farming Catfish will Help Defend Against Infection",
			"subtitle": "",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "February 28, 2023",
			"image_source": "https://images.unsplash.com/photo-1515735543535-12664d2453f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/How-an-alligator-gene-in-farming-catfish-will-help-defend-against-infections.html"
		},
		{
			"title": "Quantum Biology",
			"subtitle": "",
			"author": "Dhruve Dahiya",
			"author_contact": "",
			"publish_date": "February 24, 2023",
			"image_source": "https://images.ctfassets.net/cnu0m8re1exe/1YmuqP8BOfo4o5xArr25h0/414cdc39406baf38222ceb1b8f343c7b/quantum-life.jpg",
			"post_destination": "/Posts/qbio.html"
		},
		{
			"title": "The Anti-Icing Mechanism of Plants",
			"subtitle": "How Plants Overcome the Cold: Deciphering the Anti-Icing Mechanism",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "February 18, 2023",
			"image_source": "../assets/thumbnails/the_anti_icing_mechanism_of_plants.jpeg",
			"post_destination": "/Posts/The-Anti-Icing-Mechanism-in-Plants.html"
		},
		{
			"title": "The Placebo Effect",
			"subtitle": "Mind over matter: The surprising impact of perception on healing.",
			"author": "Charvi Kashyap",
			"author_contact": "",
			"publish_date": "February 8, 2023",
			"image_source": "https://images.unsplash.com/photo-1607874963930-2edecc67a25a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",
			"post_destination": "/Posts/The-placebo-effect.html"
		},
		{
			"title": "Reducing Lifestyle Disease In Oman",
			"subtitle": "",
			"author": "Lael Alva",
			"author_contact": "",
			"publish_date": "February 1, 2023",
			"image_source": "https://shabiba.eu-central-1.linodeobjects.com/2022/02/1644086288-1644086288-isjcf4lqoorg.jpeg",
			"post_destination": "/Posts/Reducing-Lifestyle-Disease-In-Oman.html"
		},
		{
			"title": "On the Mend: Recovering the Ozone Layer",
			"subtitle": "",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "January 29, 2023",
			"image_source": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
			"post_destination": "/Posts/On-the-Mend-recovering-the-ozone-layer.html"
		},
		{
			"title": "How SARS-CoV-2 affect Human Cells",
			"subtitle": "Let's take a look on how one of the world's deadliest virus makes it's way to accomplish their lethal mission.",
			"author": "Soham Jindal",
			"author_contact": "",
			"publish_date": "January 22, 2023",
			"image_source": "https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
			"post_destination": "/Posts/How-SARS-Cov-2-affect-human-cells.html"
		},
		{
			"title": "CRISPR: Beneficial, Effective yet Problematic Healthcare",
			"subtitle": "",
			"author": "Kamal Korrapati",
			"author_contact": "",
			"publish_date": "January 18, 2023",
			"image_source": "https://static.scientificamerican.com/sciam/cache/file/18015641-8D4B-4F1B-ADEC0DEA56DDB8FC_source.jpg",
			"post_destination": "/Posts/CRISPR-Beneficial-Effective-yet-Problematic-Healthcare.html"
		},
		{
			"title": "Can Swarming Locusts generate as much Electricity as a Storm Cloud?",
			"subtitle": "",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "January 14, 2023",
			"image_source": "https://images.unsplash.com/photo-1516434233442-0c69c369b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Can-swarming-locusts-generate-as-much-electricity-as-storm-cloud.html"
		},
		{
			"title": "CAR-T Cells: Eliminating Residual Tumor Cells",
			"subtitle": "",
			"author": "Jasmine Biju",
			"author_contact": "",
			"publish_date": "January 14, 2023",
			"image_source": "https://images.unsplash.com/photo-1631049123177-37356471f3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80",
			"post_destination": "/Posts/CAR-T-Cells-eliminating-residual-tumor-cells.html"
		},
		{
			"title": "The Dopamine Hypothesis of Schizophrenia",
			"subtitle": "",
			"author": "Charvi Kashyap",
			"author_contact": "",
			"publish_date": "January 13, 2023",
			"image_source": "https://cdn.pixabay.com/photo/2022/03/19/21/01/neurons-7079536_960_720.jpg",
			"post_destination": "/Posts/The-dopamine-hypothesis-of-schizophrenia.html"
		},
		{
			"title": "Radioactivity/ Radioactive Decay",
			"subtitle": "A blessing and a threat to the world.",
			"author": "Nour El Imane Toufiq",
			"author_contact": "",
			"publish_date": "January 12, 2023",
			"image_source": "../assets/thumbnails/radioactivity.png",
			"post_destination": "/Posts/radioactivity.html"
		},
		{
			"title": "Project to Control Surgical Errors",
			"subtitle": "",
			"author": "Raushan Pandit",
			"author_contact": "",
			"publish_date": "December 20, 2022",
			"image_source": "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Project-to-control-surgical-errors.html"
		},
		{
			"title": "Chaos Theory: The Three Body Problem",
			"subtitle": "",
			"author": "Ranica Chawla",
			"author_contact": "",
			"publish_date": "December 13, 2022",
			"image_source": "https://imageio.forbes.com/blogs-images/startswithabang/files/2017/07/TwoLorenzOrbits.jpg?format=jpg&width=1200",
			"post_destination": "/Posts/Chaos-Theory-The-Three-Body-Problem.html"
		},
		{
			"title": "What is the implication of dreaming?",
			"subtitle": "",
			"author": "Anel Mukatova",
			"author_contact": "",
			"publish_date": "November 19, 2022",
			"image_source": "https://images.unsplash.com/photo-1596772160247-e66da3dcb644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/What-are-implications-of-dreaming.html"
		},
		{
			"title": "The impact of omega-3 and omega-6 fatty acids on depression",
			"subtitle": "",
			"author": "Saanika Agarwal",
			"author_contact": "",
			"publish_date": "November 18, 2022",
			"image_source": "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/What-s-the-difference-between-omega-3-and-omega-6-resized.jpg",
			"post_destination": "/Posts/The-impact-of-omega-3-and-omega-6-fatty-acids-on-depression.html"
		},
		{
			"title": "Application of Amino-Acid based Metabolites in Early Diagnosis of MS Patients",
			"subtitle": "",
			"author": "Fareen Momen",
			"author_contact": "",
			"publish_date": "November 12, 2022",
			"image_source": "https://images.unsplash.com/photo-1638258581353-0ab658542e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
			"post_destination": "/Posts/Application-of-Amino-Acid-based-metabolites.html"
		},
		{
			"title": "GABA Receptors and Neurosteroids Effect on Psychiatric Disorders",
			"subtitle": "",
			"author": "Sneha Ahuja",
			"author_contact": "",
			"publish_date": "November 4, 2022",
			"image_source": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/GABA-Receptors-and-Neurosteroids-effect.html"
		},
		{
			"title": "Imaging a Black Hole",
			"subtitle": "",
			"author": "Mohanad Ahmed Osman",
			"author_contact": "",
			"publish_date": "October 18, 2022",
			"image_source": "https://news.mit.edu/sites/default/files/download/201606/MIT-Earth-Dish-Press.jpg",
			"post_destination": "/Posts/Imaging-a-Black-Hole.html"
		},
		{
			"title": "Alzheimer’s Connection to Dysfunctional Immune System",
			"subtitle": "",
			"author": "Shrute Dayalan",
			"author_contact": "",
			"publish_date": "September 18, 2022",
			"image_source": "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/alzheimer.html"
		},
		{
			"title": "Cell Structure",
			"subtitle": "What are the fundamental units of life made of?",
			"author": "Ngoc Tran Bui",
			"author_contact": "",
			"publish_date": "September 15, 2022",
			"image_source": "https://media.quizizz.com/resource/gs/quizizz-media/quizzes/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVyTEoyY2Vtd3JPVEduUWFfakRJa2Y3c3VSQ1ozQUVBci02QUlxb3hUeEZLajhUeEktcDQ1emlJUF81QXlqemNRTDhQUzZqcHJ5SVQwM2JhX1FGWXFUNmhlX1RMQS5WMXJCWHFQUkVjUXdVdm5q",
			"post_destination": "/Posts/Cell-Structure.html"
		},
		{
			"title": "Human Speech and Development",
			"subtitle": "",
			"author": "Mya Dias",
			"author_contact": "",
			"publish_date": "September 9, 2022",
			"image_source": "https://cdn.pixabay.com/photo/2019/12/20/06/24/transformation-4707719__340.jpg",
			"post_destination": "/Posts/Human-speech-and-development.html"
		},
		{
			"title": "Nutrigenomics: An intro to this newly emerging field",
			"subtitle": "",
			"author": "Saanika Agarwal",
			"author_contact": "",
			"publish_date": "August 25, 2022",
			"image_source": "../assets/thumbnails/nutrigenomics.png",
			"post_destination": "/Posts/nutrigenomics.html"
		},
		{
			"title": "The String Theory for babies",
			"subtitle": "",
			"author": "Swapnil k Singh",
			"author_contact": "",
			"publish_date": "August 25, 2022",
			"image_source": "https://images.unsplash.com/photo-1620393470010-fd62b8ab841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/The-string-theory-for-babies.html"
		},
		{
			"title": "Cloning Of Asiatic Lions In India - a solution or an even bigger problem?",
			"subtitle": "",
			"author": "Maahira Singh",
			"author_contact": "",
			"publish_date": "August 24, 2022",
			"image_source": "../assets/thumbnails/Asiatic-Lion-Cloning.png",
			"post_destination": "/Posts/Cloning-Of-Asiatic-Lions.html"
		},
		{
			"title": "Genetic Basis of Behavior in Bipolar Disorder?",
			"subtitle": "",
			"author": "Arushi Verma",
			"author_contact": "",
			"publish_date": "August 17, 2022",
			"image_source": "https://www.news-medical.net/image.axd?picture=2020%2F4%2Fshutterstock_696763021.jpg",
			"post_destination": "/Posts/Genetic-Basis-of-Behavior-in-Bipolar-Disorder.html"
		},
		{
			"title": "Which personality is more successful: Type A or Type B?",
			"subtitle": "",
			"author": "Na'eema Baksh",
			"author_contact": "",
			"publish_date": "August 15, 2022",
			"image_source": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
			"post_destination": "/Posts/Which-personality-is-more-successful.html"
		},
		{
			"title": "Wolbachia Vector Control",
			"subtitle": "An impactful and successful technique to lower disease spread hidden in the shadows",
			"author": "Tran Bui",
			"author_contact": "",
			"publish_date": "August 11, 2022",
			"image_source": "https://images.unsplash.com/photo-1635496471665-4e67e0e87399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/wolbachia.html"
		},
		{
			"title": "Economic and Environmental Impact of Medical Waste",
			"subtitle": "",
			"author": "Özge Özer",
			"author_contact": "",
			"publish_date": "August 8, 2022",
			"image_source": "https://ychef.files.bbci.co.uk/1600x900/p08njzs0.webp",
			"post_destination": "/Posts/economic-and-environmental-impact-of-medical-waste.html"
		},
		{
			"title": "Why safe access to abortion is a necessity",
			"subtitle": "",
			"author": "Swati Singh",
			"author_contact": "",
			"publish_date": "August 6, 2022",
			"image_source": "https://images.unsplash.com/photo-1633887291323-65cce7950f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Why-safe-access-to-abortion-is-necessity"
		},
		{
			"title": "Should We Believe In Darwin's Theory?",
			"subtitle": "",
			"author": "Laiba Ahsan",
			"author_contact": "",
			"publish_date": "August 1, 2022",
			"image_source": "https://cdn.britannica.com/06/180006-138-F7CE1D29/Charles-Darwin-Overview-life-focus-evolution-work.jpg?w=800&h=450&c=crop",
			"post_destination": "/Posts/Should-We-Believe-In-Darwins-Theory.html"
		},
		{
			"title": "What is Alternative Medicine?",
			"subtitle": "",
			"author": "Rohini Vummadi",
			"author_contact": "",
			"publish_date": "August 1, 2022",
			"image_source": "https://images.unsplash.com/photo-1564277817182-ea6c78ffafe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/alternative-medicine.html"
		},
		{
			"title": "An Overview of the Curvy Spine: Scoliosis",
			"subtitle": "",
			"author": "Lilianne Achiaa Asokwah",
			"author_contact": "",
			"publish_date": "30 July, 2022",
			"image_source": "https://images.unsplash.com/photo-1539815208687-a0f05e15d601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"post_destination": "/Posts/An-overview-of-the-curvy-spine-scoliosis"
		},
		{
			"title": "Infectious Diseases: Deep Dive into the Body",
			"subtitle": "How do the most infectious diseases invade and alter the body? Let’s dive into the cells!",
			"author": "McKenzie Mote & Shamari Madkins",
			"author_contact": "",
			"publish_date": "July 28, 2022",
			"image_source": "https://images.unsplash.com/photo-1584036533827-45bce166ad94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			"post_destination": "/Posts/Infectious-diseases-deep-dive-into-the-body"
		},
		{
			"title": "How can Breast Milk Affect the Microbiome?",
			"subtitle": "",
			"author": "Arsa Satheeskumar",
			"author_contact": "",
			"publish_date": "July 26, 2022",
			"image_source": "https://us.123rf.com/450wm/comzeal/comzeal1809/comzeal180900069/107933519-milk-pump-and-baby-lying-on-the-white-bed.jpg?ver=6",
			"post_destination": "/Posts/How-can-breast-milk-affect-the-microbiome.html"
		},
		{
			"title": "How Does DNA Work",
			"subtitle": "",
			"author": "Rohini Vummadi",
			"author_contact": "",
			"publish_date": "July 17, 2022",
			"image_source": "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NlbGx1bGFyLW1pY3Jvc2NvcGljLWRuYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
			"post_destination": "/Posts/How-Does-DNA-Work"
		},
		{
			"title": "Understanding Cancer Biology with The Warburg Effect",
			"subtitle": "Let's delve into how Warburg metabolism benefits cancer cells and fully characterizes their innate greed for glucose.",
			"author": "Jared Ortiz-Luis",
			"author_contact": "",
			"publish_date": "July 17, 2022",
			"image_source": "https://images.unsplash.com/photo-1631048005681-79a19681e4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Understanding-Cancer-Biology"
		},
		{
			"title": "Protein Folding",
			"subtitle": "An often-overlooked procedure that rules our bodies.",
			"author": "Ngoc Tran Bui",
			"author_contact": "",
			"publish_date": "July 10, 2022",
			"image_source": "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=554&q=80",
			"post_destination": "/Posts/Protein-folding.html"
		},
		{
			"title": "Anatomy of the Human Body",
			"subtitle": "12 systems: 1 system/article",
			"author": "Rohini Vummadi",
			"author_contact": "",
			"publish_date": "July 8, 2022",
			"image_source": "https://cdn.mos.cms.futurecdn.net/mGfKXFfhxXuLuoCT8ZnuxZ.jpg",
			"post_destination": "/Posts/Anatomy-of-the-Human-Body"
		},
		{
			"title": "Naked Singularities: Could They Exist in Our Universe?",
			"subtitle": "",
			"author": "Ranica Chawla",
			"author_contact": "",
			"publish_date": "July 7, 2022",
			"image_source": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Naked.Singularity%2COverextremal.Kerr.Newman%2CRaytracing.png",
			"post_destination": "/Posts/naked-singularities.html"
		},
		{
			"title": "Bionology in the Recombinant Production of Synthetic Human Growth Hormone",
			"subtitle": "",
			"author": "Anna Pham",
			"author_contact": "",
			"publish_date": "July 6, 2022",
			"image_source": "https://static8.depositphotos.com/1504385/973/i/600/depositphotos_9736868-stock-photo-researcher-holding-up-a-gmo.jpg",
			"post_destination": "/Posts/Bionology-in-the-Recombinant-Production-of-Synthetic-Human-Growth-Hormone"
		},
		{
			"title": "&OpenCurlyDoubleQuote;From Our Perspective&CloseCurlyDoubleQuote;: The Impact of Recent School Shootings on Mental Health",
			"subtitle": "How the recent school shootings have affected United States students' mental health, from students’ perspective.",
			"author": "Alexa Cuvilly",
			"author_contact": "",
			"publish_date": "July 6, 2022",
			"image_source": "../assets/thumbnails/effect_of_school_shooting_on_children.png",
			"post_destination": "/Posts/From-Our-Prespective-the-impact-of-recent-school-shootings-on-mental-health.html"
		},
		{
			"title": "Stellar Evolution",
			"subtitle": "",
			"author": "Deepthy Ajith K",
			"author_contact": "",
			"publish_date": "July 6, 2022",
			"image_source": "https://images.unsplash.com/photo-1605704311533-443f1f58874f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
			"post_destination": "/Posts/stellar-evolution"
		},
		{
			"title": "Artificial Photosynthesis",
			"subtitle": "",
			"author": "Danika Chan",
			"author_contact": "",
			"publish_date": "July 4, 2022",
			"image_source": "https://images.unsplash.com/photo-1532298488760-970ff6decf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			"post_destination": "/Posts/Artificial-Photosynthesis"
		},
		{
			"title": "Active Galactic Nuclei: The Core of Galaxies",
			"subtitle": "",
			"author": "Luv Meena",
			"author_contact": "",
			"publish_date": "July 2, 2022",
			"image_source": "https://images.unsplash.com/photo-1543719621-92ebcae62483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
			"post_destination": "/Posts/Active-Galactic-Nuclei"
		},
		{
			"title": "Dostarlimab; a saviour to rectal cancer",
			"subtitle": "",
			"author": "Ayana Samantray",
			"author_contact": "",
			"publish_date": "July 1, 2022",
			"image_source": "https://images.unsplash.com/photo-1619008910533-cef6857716ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Dostarlimab-a-saviour-to-rectal-cancer"
		},
		{
			"title": "Spina Bifida",
			"subtitle": "",
			"author": "Ayana Samantray",
			"author_contact": "",
			"publish_date": "June 28, 2022",
			"image_source": "https://images.unsplash.com/photo-1624716472099-886e632a4400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BpbmFsJTIwY29yZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/Spina-bifida"
		},
		{
			"title": "Aphantatic Artists: The Paradoxical Relationship Between Lack of Imagination and Artwork",
			"subtitle": "",
			"author": "Amna Eisa",
			"author_contact": "",
			"publish_date": "June 28, 2022",
			"image_source": "https://images.unsplash.com/photo-1590622974113-66a9160acf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Aphantatic-artists-the-paradoxical-relationship-between-lack-of-imagination-and-artwork"
		},
		{
			"title": "Delving into Black Holes",
			"subtitle": "",
			"author": "Deepthy Ajith K",
			"author_contact": "",
			"publish_date": "June 26, 2022",
			"image_source": "https://images.unsplash.com/photo-1597449031666-21da12583121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Delving-into-black-holes"
		},
		{
			"title": "The Fourth Dimension: Beyond Visualization",
			"subtitle": "",
			"author": "Min Khant Oakkar",
			"author_contact": "",
			"publish_date": "June 26, 2022",
			"image_source": "https://images.unsplash.com/photo-1633672783124-aa6780833ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/The-fourth-dimension-beyond-visualization"
		},
		{
			"title": "Gravitational Lensing and its Applications",
			"subtitle": "",
			"author": "Deepthy Ajith K",
			"author_contact": "",
			"publish_date": "June 25, 2022",
			"image_source": "https://images.unsplash.com/photo-1502895907098-247038bfc175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Gravitational-lensing-and-its-applications"
		},
		{
			"title": "United States Socio-Political Deliberation on Decreasing CO<sub>2</sub> Emissions",
			"subtitle": "",
			"author": "Lakshya Jaikumar",
			"author_contact": "",
			"publish_date": "June 16, 2022",
			"image_source": "https://images.unsplash.com/photo-1634467435669-831f777a6432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			"post_destination": "/Posts/United-states-socio-politiclal-deliberation-on-decreasing-co2-emmisions"
		},
		{
			"title": "Signs of Liars",
			"subtitle": "Often people lie to us these are a few ways to stop them.",
			"author": "Juliana Russell",
			"author_contact": "",
			"publish_date": "June 8, 2022",
			"image_source": "https://images.unsplash.com/photo-1583494697506-09840b7e55d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			"post_destination": "/Posts/Signs-of-liars"
		},
		{
			"title": "Tumor-Hypoxia",
			"subtitle": "",
			"author": "Justina Lee",
			"author_contact": "",
			"publish_date": "June 8, 2022",
			"image_source": "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Tumor-hypoxia"
		},
		{
			"title": "Exploring Neurodegenerative Disease in the Context of American Football",
			"subtitle": "Are the numerous severe neurological pathologies associated with this fan-favorite sport enough to convince government officials to set a minimum age requirement?",
			"author": "Jared Ortiz-Luis",
			"author_contact": "",
			"publish_date": "June 8, 2022",
			"image_source": "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
			"post_destination": "/Posts/Exploring-neurodegenerative-disease-in-the-context-of-american-football"
		},
		{
			"title": "A Drink Before Final Exams",
			"subtitle": "“Got exam stress? Read this article”",
			"author": "Emily Jia",
			"author_contact": "",
			"publish_date": "June 7, 2022",
			"image_source": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/A-drink-before-final-exams"
		},
		{
			"title": "The Universe : Infinite or Finite?",
			"subtitle": "",
			"author": "Yoav Greenberg",
			"author_contact": "",
			"publish_date": "June 7, 2022",
			"image_source": "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
			"post_destination": "/Posts/The-universe-infinite-or-finite"
		},
		{
			"title": "Dissecting the Brain",
			"subtitle": "Learning about the different parts of the brain and what they are responsible for!",
			"author": "Alexa Cuvilly",
			"author_contact": "",
			"publish_date": "June 7, 2022",
			"image_source": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
			"post_destination": "/Posts/Dissecting-the-brain"
		},
		{
			"title": "Parasitic Pathogens and Their Inner-workings",
			"subtitle": "Bacteria and viruses in action as the immune system goes on high alert.",
			"author": "Ngoc Tran Bui",
			"author_contact": "",
			"publish_date": "June 5, 2022",
			"image_source": "https://images.unsplash.com/photo-1580378156095-317d986123f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
			"post_destination": "/Posts/Parasitic-pathogens-and-their-inner-workings"
		},
		{
			"title": "The Concerning Effect the Omicron Variant Has on the COVID-19 Vaccine",
			"subtitle": "The sequel to ‘The COVID-19 Vaccine is Not a Miracle Cure’",
			"author": "Emily Jia",
			"author_contact": "",
			"publish_date": "May 31, 2022",
			"image_source": "https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			"post_destination": "/Posts/The-concerning-effect-the-omicron-variant-has-on-the-covid-19-vaccine.html"
		},
		{
			"title": "Peto’s paradox: A cure for cancer?",
			"subtitle": "“History repeats, but science reverberates.”",
			"author": "Sathya",
			"author_contact": "",
			"publish_date": "May 30, 2022",
			"image_source": "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
			"post_destination": "/Posts/Petos-paradox-a-cure-for-cancer"
		},
		{
			"title": "Health Effects of Mercury Poisoning",
			"subtitle": "",
			"author": "Min Khant Oakkar",
			"author_contact": "",
			"publish_date": "May 27, 2022",
			"image_source": "https://images.unsplash.com/photo-1555699875-5773b06e8ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
			"post_destination": "/Posts/Health-effects-of-mercury-poisoning"
		},
		{
			"title": "How butterflies use jet propulsion for quick getaways",
			"subtitle": "Have you ever wondered what role physics play in something as simple as a butterfly’s flight?",
			"author": "Satinder Bamrah",
			"author_contact": "",
			"publish_date": "May 22, 2022",
			"image_source": "https://images.unsplash.com/photo-1623474237394-055b5c5b9095?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053",
			"post_destination": "/Posts/How-butterflies-use-jet-propulsion-for-quick-getaways"
		},
		{
			"title": "Can Trauma Affect Our Genetics?",
			"subtitle": "did you know you can pass down trauma to your kids?",
			"author": "Almaas Ghafoor",
			"author_contact": "",
			"publish_date": "May 22, 2022",
			"image_source": "https://images.unsplash.com/photo-1628595351029-c2bf17511435?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032",
			"post_destination": "/Posts/Can-trauma-affect-our-genetics"
		},
		{
			"title": "Angioplasty VS Stents",
			"subtitle": "When combined, they have saved many lives. But how are they different from each other?",
			"author": "Priya Bongu",
			"author_contact": "",
			"publish_date": "May 21, 2022",
			"image_source": "../assets/thumbnails/angioplasty_vs_stents.png",
			"post_destination": "/Posts/Angioplasty-vs-stents"
		},
		{
			"title": "Alcoholism Drug Restores Vision Loss from Macular Degeneration and Retinitis Pigmentosa",
			"subtitle": "A promising solution to these chronic, age-related eye diseases",
			"author": "Viniya Kannangnatt",
			"author_contact": "",
			"publish_date": "May 21, 2022",
			"image_source": "https://images.unsplash.com/photo-1583604310111-9cd137d6ffe5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
			"post_destination": "/Posts/Alcoholism-drug-restores-vision-loss"
		},
		{
			"title": "The Unfolding of Liver Regeneration",
			"subtitle": "Flesh regrown second by second right in front of our eyes.",
			"author": "Ngoc Tran Bui",
			"author_contact": "",
			"publish_date": "May 20, 2022",
			"image_source": "../assets/thumbnails/the_unfolding_of_liver_regeneration.png",
			"post_destination": "/Posts/The-unfolding-of-liver-regeneration"
		},
		{
			"title": "CRISPR Gene Editing: A Potential Treatment?",
			"subtitle": "Is it a promising cure for genetic diseases or is it the beginning of unnatural selection?",
			"author": "Arsa Satheeskumar",
			"author_contact": "",
			"publish_date": "May 20, 2022",
			"image_source": "https://images.unsplash.com/photo-1643780668909-580822430155?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032",
			"post_destination": "/Posts/CRISPR-gene-editing-a-potential-treatment"
		},
		{
			"title": "“Addiction: Our body loves an escape!”",
			"subtitle": "Would you risk your family for a euphoric moment? My story with addiction and also the science behind it.",
			"author": "McKenzie Mote",
			"author_contact": "",
			"publish_date": "May 20, 2022",
			"image_source": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940",
			"post_destination": "/Posts/Addiction-our-body-loves-an-escape"
		},
		{
			"title": "Alice in Wonderland Syndrome",
			"subtitle": "Appearances can be deceiving. Although there is no cure, it is one of the rarest diseases in the world.",
			"author": "Anisha Patel",
			"author_contact": "",
			"publish_date": "May 18, 2022",
			"image_source": "https://images.unsplash.com/photo-1605008803760-47f5528eef66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			"post_destination": "/Posts/Alice-in-wonderland-syndrome"
		},
		{
			"title": "Music & The Brain: How do they Correlate and Why is it important?",
			"subtitle": "Music is more than just a simple pastime. Check out how!",
			"author": "Alexa Cuvilly",
			"author_contact": "",
			"publish_date": "May 18, 2022",
			"image_source": "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"post_destination": "/Posts/Music-and-the-brain-correlation-and-importance"
		},
		{
			"title": "Scientific Ways To Reduce Stress",
			"subtitle": "Maybe it's time to leave this world of stress and listen to our inner selves...",
			"author": "Sophia Zheng",
			"author_contact": "",
			"publish_date": "April 25, 2022",
			"image_source": "https://images.unsplash.com/photo-1522403236043-29876aa85962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/Scientific-ways-to-reduce-stress"
		},
		{
			"title": "Reflex Response to Sleep Apnea",
			"subtitle": "Dangerous oxygen deprivation, there’s more to know!",
			"author": "McKenzie Mote",
			"author_contact": "",
			"publish_date": "April 19, 2022",
			"image_source": "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNsZWVwJTIwYXBuZWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"post_destination": "/Posts/Reflex-response-to-sleep-apnea"
		},
		{
			"title": "Stoichiometry and its Examples",
			"subtitle": "Introduction to Stoichiometry with some basic examples.",
			"author": "Edward Calzia",
			"author_contact": "",
			"publish_date": "April 18, 2022",
			"image_source": "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXRvbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/Stoichiometry"
		},
		{
			"title": "Short Bowel Syndrome",
			"subtitle": "There's no Cure for it yet, so it's better to be aware of it than to avoid it.",
			"author": "Ayana Samantray",
			"author_contact": "",
			"publish_date": "April 17, 2022",
			"image_source": "../assets/thumbnails/short_bowel_syndrome.png",
			"post_destination": "/Posts/Short-Bowel-Syndrome"
		},
		{
			"title": "Microplastics in Human Body",
			"subtitle": "The biggest enemy of the environment has entered out bodies and it now the biggest threat to us!",
			"author": "John Aloyzeus Reotutar",
			"author_contact": "",
			"publish_date": "April 14, 2022",
			"image_source": "https://images.unsplash.com/photo-1621664293078-97e3b80711f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWljcm9wbGFzdGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/Microplastics-in-human-body"
		},
		{
			"title": "Alteration of Memories",
			"subtitle": "Each time you recall your memories, you change them.",
			"author": "Amna Eisa",
			"author_contact": "",
			"publish_date": "April 11, 2022",
			"image_source": "https://images.unsplash.com/photo-1598623549917-a38dc6cd19b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
			"post_destination": "/Posts/Alteration-of-Memories"
		},
		{
			"title": "How Viruses Give Insight to Human Physiology",
			"subtitle": "Let's see what these micro-sized organisms tell us about ourselves.",
			"author": "Jared Ortiz-Luis",
			"author_contact": "",
			"publish_date": "April 6, 2022",
			"image_source": "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBwaHlzaW9sb2d5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/How-viruses-give-insight-to-human-physiology"
		},
		{
			"title": "Chewing Gum: In Regards to the Human Brain",
			"subtitle": "",
			"author": "Rohini Vummadi",
			"author_contact": "",
			"publish_date": "31 March, 2022",
			"image_source": "https://images.unsplash.com/photo-1629431136420-23bbe56141a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			"post_destination": "/Posts/Chewing-Gum-In-Regards-To-The-Human-Brain"
		},
		{
			"title": "Schrödinger’s Cat: The Misinterpretation Of Quantum Physics",
			"subtitle": "",
			"author": "Ngoc Tran Bui",
			"author_contact": "",
			"publish_date": "31 March 2022",
			"image_source": "https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
			"post_destination": "/Posts/THE-MISINTERPRETATION-OF-QUANTUM-PHYSICS"
		},
		{
			"title": "The COVID-19 Vaccine is Not a Miracle Cure",
			"subtitle": "Learn about Covid-19 and its treatments",
			"author": "Emily Jia",
			"author_contact": "",
			"publish_date": "28 March 2022",
			"image_source": "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
			"post_destination": "/Posts/The-COVID-19-Vaccine-Is-Not-a-Miracle-Cure"
		},
		{
			"title": "Antikythera Mechanism",
			"subtitle": "May have been the world's first STEM project",
			"author": "Juliana Russell",
			"author_contact": "",
			"publish_date": "March 18, 2022",
			"image_source": "https://images.unsplash.com/photo-1517643070288-f6b3933ad727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
			"post_destination": "/Posts/Antikythera-mechanism"
		},
		{
			"title": "Science Behind Phobia",
			"subtitle": "Lets take a deep dive into the science behind phobias",
			"author": "Anay Naik",
			"author_contact": "https://www.instagram.com/anay_1288_/",
			"publish_date": "January 22, 2022",
			"image_source": "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
			"post_destination": "/Posts/science-behind-phobia"
		}
	],
	"tech": [
		{
		      title: "The Promise Made To The Quantum Horizons by Graphene Nanoribbons",
		      subtitle: "",
		      author: "Isha Roy",
		      author_contact: "",
		      publish_date: "September 4, 2023",
		      image_source: "https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/graphene-nanoribbons.jpg",
		      post_destination: "/Posts/Quantum-Horizon-by-Graphene-Nanoribbons.html",
    		},
		{
      title: "Green Coding",
      subtitle: "",
      author: "Zhuri Burchenson",
      author_contact: "",
      publish_date: "August 31, 2023",
      image_source:
        "https://media.istockphoto.com/id/1310150441/photo/green-computing-green-technology-green-it-csr-and-it-ethics-concept.jpg?s=170667a&w=0&k=20&c=3Xc9yKtUAB6rrlIeJSeL-kETR8W5RipotJPs_DMTC-4=",
      post_destination: "/Posts/Green-Coding.html",
    },
		   {
      title: "Technology & Climate",
      subtitle: "The Rise of CCS",
      author: "Zhuri Burchenson",
      author_contact: "",
      publish_date: "August 28, 2023",
      image_source:
        "https://images.pexels.com/photos/16905006/pexels-photo-16905006/free-photo-of-temperature-alert-sensor-and-thermostat-in-a-flower-glasshouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/Tech-and-climate.html",
    },
		{
			title: "AI: The Future of Cyber Security?",
			subtitle: "Cybersecurity's Evolution: Navigating the Intersection of Artificial Intelligence and Digital Defense.",
			author: "Saad Amin",
			author_contact: "",
			publish_date: "August 21, 2023",
			image_source: "https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_1280.jpg",
			post_destination: "/Posts/AI-the-future-of-cyber-security.html"
		},
		{
			title: "Are We too Dependent on Technology?",
			subtitle: "Exploring the Impact of Technology on Society.",
			author: "Ritika Tyagi",
			author_contact: "", // I personally dunno why does it even exists...
			publish_date: "August 12, 2023",
			image_source: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
			post_destination: "/Posts/Are-we-too-dependant-on-technology.html"
		},
		{
			"title": "Ethical Hacking",
			"subtitle": "",
			"author": "Afreen Hossain",
			"author_contact": "https://www.linkedin.com/in/afreen-hossain/",
			"publish_date": "August 6, 2023",
			"image_source": "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/ethical-hacking-afreen.html"
		},
		{
			"title": "TECHNOLOGY AND COMMUNICATION IN TODAY’S WORLD",
			"subtitle": "",
			"author": "Ritika Tyagi",
			"author_contact": "",
			"publish_date": "August 6, 2023",
			"image_source": "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/Technology.html"
		},
		{
			"title": "A New Age for Minimally Invasive Surgeries",
			"subtitle": "",
			"author": "Lisara Gunawardana",
			"author_contact": "",
			"publish_date": "August 5, 2023",
			"image_source": "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
			"post_destination": "/Posts/A-New-Age-for-Minimally-Invasive-Surgeries.html"
		},
		{
			"title": "THE FUTURE OF ARTIFICIAL INTELLIGENCE : ADVANCEMENTS AND IMPLICATIONS",
			"subtitle": "",
			"author": "Aiyana Verma",
			"author_contact": "",
			"publish_date": "July 9, 2023",
			"image_source": "https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/11eeb7f9-7512-49aa-abdc-a27001dd123e/AI_20230215_article-hero_1200x564.jpg",
			"post_destination": "/Posts/THE-FUTURE-OF-ARTIFICIAL-INTELLIGENCE-ADVANCEMENTS-AND-IMPLICATIONS.html"
		},
		{
			"title": "How is Technology Changing the Face of the Banking Sector?",
			"subtitle": "Exploring Technological Innovations Redefining the Banking Landscape.",
			"author": "Ritika Tyagi",
			"author_contact": "",
			"publish_date": "June 22, 2023",
			"image_source": "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/How-is-technology-changing-the-face-of-banking-sector.html"
		},
		{
			"title": "The Swift and Surprising AI Revolution",
			"subtitle": "Unraveling the Unpredictable Future",
			"author": "Afreen Hossain",
			"author_contact": "",
			"publish_date": "June 19, 2023",
			"image_source": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The-swift-and-surprising-AI-revolution.html"
		},
		{
			"title": "Quantum Computing: Unlocking the Power of Quantum Mechanics",
			"subtitle": "",
			"author": "Aadesh Taneja",
			"author_contact": "",
			"publish_date": "June 17, 2023",
			"image_source": "https://media.istockphoto.com/id/1333398992/video/quantum-computing-seamless-loop.jpg?s=640x640&k=20&c=wEQMJ5OHhtM6D7-vuLBsuynnoSO75MuhvJJExgqEQqg=",
			"post_destination": "/Posts/Quantum-Computing-Unlocking-Power-Quantum-Mechanics.html"
		},
		{
			"title": "The Power of APIs in Modern Software Development",
			"subtitle": "Code Connectors: Harnessing the Potential of APIs for Advanced Software Development.",
			"author": "Aurum Mandal",
			"author_contact": "",
			"publish_date": "June 12, 2023",
			"image_source": "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			"post_destination": "/Posts/The-power-of-APIs-Modern-Software-Development.html"
		},
		{
			"title": "Virtual Reality in Education",
			"subtitle": "Navigating the Challenges and Unlocking the Potential",
			"author": "Treasure Mayowa",
			"author_contact": "https://linkedin.com/in/treasure-mayowa",
			"publish_date": "June 11, 2023",
			"image_source": "https://images.unsplash.com/photo-1626379961798-54f819ee896a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Virtual-reality-in-education-navigating-the-challenges-and-unlocking-the-potential.html"
		},
		{
			"title": "The Synergy of AI and Design: Unleashing the Power of Innovation",
			"subtitle": "",
			"author": "Anel Mukatova ",
			"author_contact": "",
			"publish_date": "June 11, 2023",
			"image_source": "https://images.unsplash.com/photo-1655635643568-f30d5abc618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
			"post_destination": "/Posts/synergy_of_AI_and_design_Unleashing_the_power_of_innovation.html"
		},
		{
			"title": "The Metaverse: Can Technology Save An Island",
			"subtitle": "Digital Dimensions and Island Preservation: Unleashing the Potential of the Metaverse",
			"author": "Ariana Walcott",
			"author_contact": "",
			"publish_date": "June 6, 2023",
			"image_source": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			"post_destination": "/Posts/The-metaverse-can-technology-save-an-island.html"
		},
		{
			"title": "Why Resurrecting Back Extinct Animals Is A Horrible Idea",
			"subtitle": "",
			"author": "Ariana D. Walcott",
			"author_contact": "",
			"publish_date": "May 10, 2023",
			"image_source": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/io3udeD3AEz4/v1/1200x-1.jpg",
			"post_destination": "/Posts/Resurrecting-Extinct-Animals.html"
		},
		{
			"title": "The Role Of Technology In Supporting Individuals With Autism",
			"subtitle": "Exploring Innovations for Enhancing Autism Support and Inclusion through Technology",
			"author": "Aadrika Maurya",
			"author_contact": "",
			"publish_date": "April 25, 2023",
			"image_source": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The-Role-of-Technology-in-supporting-individuals-with-autism.html"
		},
		{
			"title": "Space-Based Solar Power",
			"subtitle": "Determining the efficiency of space-based solar panels in the energy needs of the world.",
			"author": "Mahashri Ranjith Kumar",
			"author_contact": "",
			"publish_date": "April 19, 2023",
			"image_source": "https://images.unsplash.com/photo-1633984726552-3ed7296dc5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Space-Based-solar-power.html"
		},
		{
			"title": "Neural Network in Arts",
			"subtitle": "",
			"author": "Anel Mukatova",
			"author_contact": "",
			"publish_date": "April 16th, 2023",
			"image_source": "https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg",
			"post_destination": "/Posts/Neural-Network-in-Arts.html"
		},
		{
			"title": "Difference between Computer Science and IT",
			"subtitle": "These two are some of the most easily confused carreer fields, here are the differences between them.",
			"author": "Surayya Yuldashova",
			"author_contact": "",
			"publish_date": "January 14, 2023",
			"image_source": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Difference-between-computer-science-and-IT.html"
		},
		{
			"title": "Applications Of Machine Learning in Healthcare",
			"subtitle": "",
			"author": "Jingran Yang",
			"author_contact": "",
			"publish_date": "November 3, 2022",
			"image_source": "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
			"post_destination": "/Posts/Applications-of-machine-learning.html"
		},
		{
			"title": "Virtual Field Trips (VFTs)",
			"subtitle": "Reflections on the Future of Virtual Reality in Education and the Possibilities of Change",
			"author": "Aymen Jadda",
			"author_contact": "",
			"publish_date": "October 28, 2022",
			"image_source": "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
			"post_destination": "/Posts/Virtual-Field-Trips.html"
		},
		{
			"title": "MedIm: Artificial Intelligence System for Pneumonia Detection",
			"subtitle": "",
			"author": "Nargiz Akhmetova",
			"author_contact": "",
			"publish_date": "October 24, 2022",
			"image_source": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/MedIm-Artificial-Intelligence-System-for-Pneumonia-Detection.html"
		},
		{
			"title": "Peering into the Potential of SETI",
			"subtitle": "",
			"author": "Deepthy Ajith K",
			"author_contact": "",
			"publish_date": "September 7, 2022",
			"image_source": "https://lh3.googleusercontent.com/ufimXQESQNAIPlN6A8c9YF-uh44u9vXLZqgSGW42noGUaAte0s46X25KdmLEBtopybrKS3xCnZR-HhhiQ4K0_r9n6Lw7AEoHHD-3lfLo0-NLv8oep1YwKLxjlVB1IgOqu1DyThnK2593oGTMhA",
			"post_destination": "/Posts/seti.html"
		},
		{
			"title": "How Machine Learning Can Aid the Visually Impaired",
			"subtitle": "",
			"author": "Julia Huang",
			"author_contact": "",
			"publish_date": "August 19, 2022",
			"image_source": "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/How-machine-learning-can-aid-the-visually-impaired.html"
		},
		{
			"title": "A Guide to Ethical Hacking",
			"subtitle": "",
			"author": "Lighittha.P.R",
			"author_contact": "",
			"publish_date": "30 July, 2022",
			"image_source": "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/A-guide-to-ethical-hacking"
		},
		{
			"title": "Understanding Network Economics: From Basics to Applications",
			"subtitle": "The era of efficient opportunities, investments, and capacity expansion of network industries has begun with the decision-making behavior in economics!",
			"author": "Arushi Jain",
			"author_contact": "",
			"publish_date": "June 26, 2022",
			"image_source": "https://images.unsplash.com/photo-1543946602-a0fce8117697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
			"post_destination": "/Posts/Understanding-network-economics-from-basics-to-applications"
		},
		{
			"title": "Effects of Digital Divide on Education in India Amidst the Pandemic",
			"subtitle": "",
			"author": "Arushi Jain",
			"author_contact": "",
			"publish_date": "June 25, 2022",
			"image_source": "../assets/thumbnails/effect_of_digital_divide_on_education.jpg",
			"post_destination": "/Posts/Effects-of-digital-divide-on-education-in-india-amidst-the-pandamic"
		},
		{
			"title": "Nuclear transmutation and how we can turn lead into gold",
			"subtitle": "",
			"author": "Shikha Bhayani",
			"author_contact": "",
			"publish_date": "June 6, 2022",
			"image_source": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Nuclear-transmutation-and-how-we-can-turn-lead-into-gold"
		},
		{
			"title": "How a Machine Learning Model Can Be Used to Detect Skin Cancer",
			"subtitle": "",
			"author": "Julia Huang",
			"author_contact": "",
			"publish_date": "June 5, 2022",
			"image_source": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "Posts/How-a-machine-learning-model-can-be-used-to-detect-skin-cancer"
		},
		{
			"title": "The Relationship between Data Science and Childhood Obesity Cure",
			"subtitle": "Say bye-bye to fat through these features of big data!",
			"author": "Arushi Jain",
			"author_contact": "",
			"publish_date": "May 25, 2022",
			"image_source": "https://images.unsplash.com/photo-1537884944318-390069bb8665?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
			"post_destination": "/Posts/The-relationship-between-data-science-and-childhood-obesity-cure"
		},
		{
			"title": "Artificial Intelligence and Vaccines: Paradigm Shift in Immunology",
			"subtitle": "Can the best friend of humanity help it fight its biggest foe?",
			"author": "Vanya Sahi",
			"author_contact": "",
			"publish_date": "April 6, 2022",
			"image_source": "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Artificial-intelligence-and-vaccines"
		}
	],
	"eng": [
		 {
      title: "Superconductors",
      subtitle: " Unlocking the Marvels of Zero-Resistance Power Transmission",
      author: "Afreen Hossain",
      author_contact: "https://www.linkedin.com/in/afreen-hossain/",
      publish_date: "September 2, 2023",
      image_source:
        "https://images.pexels.com/photos/189524/pexels-photo-189524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination: "/Posts/Superconductors.html",
    },
		{
			title: "Qubits, Kinderjoy, and the Human Brain: An Insight on Quantum Cognition",
			subtitle: "Exploring Quantum Phenomena's Impact on Human Cognition: A Journey into Brain-Particle Dynamics.",
			author: "Kavya Bhanushali",
			author_contact: "",
			publish_date: "August 13, 2023",
			image_source: "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
			post_destination: "/Posts/Qubits-Kinderjoy-and-the-Human-Brain.html"
		},
		{
			title: "Using the Elements of Architecture to Tackle Scarcity",
			subtitle: "Harmonizing Design and Resource Challenges: Applying Architectural Elements to Address Scarcity.",
			author: "Kashvee Gandhi",
			author_contact: "", 
			publish_date: "August 12, 2023",
			image_source: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			post_destination: "/Posts/Using-the-elements-of-architecture-to-tackle-scarcity.html"
		},
		{
			title: "Superposition and Entanglement",
			subtitle: "Quantum States Beyond the Ordinary: Delving into the Enigmatic Behavior of Interconnected Particles.",
			author: "Mohammed Ayaan",
			author_contact: "",
			publish_date: "August 11, 2023",
			image_source: "https://images.unsplash.com/photo-1666112835156-c65bb806ac73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
			post_destination: "/Posts/Superposition-and-entanglement.html"
		},
		{
			"title": "Photocells",
			"subtitle": "Illuminating Insights into Light Sensing and Energy Conversion Mechanisms.",
			"author": "Afreen Hossain",
			"author_contact": "https://www.linkedin.com/in/afreen-hossain/",
			"publish_date": "August 4, 2023",
			"image_source": "https://cdn-learn.adafruit.com/guides/images/000/000/026/medium800/photocell.jpg?1473012319",
			"post_destination": "/Posts/Photocells.html"
		},
		{
			"title": "What is engineering and what do engineers do in each field?",
			"subtitle": "",
			"author": "Afreen Hossain",
			"author_contact": "",
			"publish_date": "July 4, 2023",
			"image_source": "https://www.austintec.com/wp-content/uploads/2019/04/types-of-engineers.jpg",
			"post_destination": "/Posts/What-is-engineering-and-what-do-engineers-do.html"
		},
		{
			"title": "An Insight To Rocket Propulsion",
			"subtitle": "",
			"author": "Anel Mukatova",
			"author_contact": "",
			"publish_date": "May 23, 2023",
			"image_source": "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nep_mars_no_planets-1.png?itok=qPw6FbB5",
			"post_destination": "/Posts/Insight-Rocket-Propulsion.html"
		},
		{
			"title": "Hydrogen-Powered Car: Fuel Cell Engine Technology",
			"subtitle": "Driving our Way Towards a Sustainable Future with Hydrogen Fuel Cell Technology",
			"author": "Harya Vishwanath",
			"author_contact": "",
			"publish_date": "April 26, 2023",
			"image_source": "https://images.unsplash.com/photo-1555550252-fc3187f10240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Hydrogen-powered-car-fuel-cell-engine-technology.html"
		},
		{
			"title": "Leveraging Digital Twins to Unlock the Potential of the Industrial Internet of Things",
			"subtitle": "Bridging the Physical-Digital Divide",
			"author": "Jay Kataria",
			"author_contact": "",
			"publish_date": "April 23, 2023",
			"image_source": "https://images.unsplash.com/photo-1611117775350-ac3950990985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
			"post_destination": "/Posts/Leveraging-digital-twins-to-unlock-the-potential-of-the-industrial-internet-of-things.html"
		},
		{
			"title": "Soft Robotics: The Key to Unlocking the Mysteries of Space",
			"subtitle": "",
			"author": "Fareeha Rehman",
			"author_contact": "",
			"publish_date": "April 4, 2023",
			"image_source": "https://i.ytimg.com/vi/_4BTGgJjHog/maxresdefault.jpg",
			"post_destination": "/Posts/Soft-Robotics.html"
		},
		{
			"title": "Kinematics in 1D Motion",
			"subtitle": "Discovering Relationships Between Position, Velocity, and Acceleration",
			"author": "Julia Huang",
			"author_contact": "",
			"publish_date": "November 7, 2022",
			"image_source": "https://images.unsplash.com/photo-1488998628026-a1a79746cdcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Kinematics-in-1D-motion.html"
		},
		{
			"title": "Effective Project Management: Potential Cure for Stress and Depression in Construction and Engineering?",
			"subtitle": "",
			"author": "Asher Segun-Olasanmi",
			"author_contact": "",
			"publish_date": "July 10, 2022",
			"image_source": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
			"post_destination": "/Posts/effective-project-management.html"
		},
		{
			"title": "Progress In Diaster",
			"subtitle": "Faults in Engineering Sector somethimes lead to Disasters, but should we simply blame engineering for that?",
			"author": "Juliana Russell",
			"author_contact": "",
			"publish_date": "May 21, 2022",
			"image_source": "https://images.unsplash.com/photo-1571686683059-4b1bf2086a13?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyZXNzJTIwaW4lMjBkaXNhc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
			"post_destination": "/Posts/Progress-in-disaster"
		},
		{
			"title": "Inclusion in STEM: What’s Changed and What Hasn’t",
			"subtitle": "“Girls aren’t built for engineering jobs. You can't do that.”<br><b>“Yes, I can!</b>”",
			"author": "Asher Segun-Olasanmi",
			"author_contact": "",
			"publish_date": "May 21, 2022",
			"image_source": "https://images.unsplash.com/photo-1625225233840-695456021cde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
			"post_destination": "/Posts/Inclusion-in-STEM-whats-changed-and-what-hasnt"
		}
	],
	"math": [
		  {
      title: "The Significance of Integration and Differentiation",
      subtitle: "Unveiling the Pillars of Calculus",
      author: "Afreen Hossain",
      author_contact: "https://www.linkedin.com/in/afreen-hossain/",
      publish_date: "August 29, 2023",
      image_source:
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      post_destination:
        "/Posts/The-Significance-of-Integration-and-Differentiation.html",
    },
			{
      title: "THE MATHEMATICS OF CHESS",
      subtitle: "",
      author: "Gülin Gürbüz ",
      author_contact: "",
      publish_date: "August 25, 2023",

      image_source:
        "https://th.bing.com/th/id/OIP.B1s8hA4weVyFqDD7yYVb4QHaE8?pid=ImgDet&rs=1",
      post_destination: "/Posts/The-Mathematics-Of-Chess.html",
    },
		{
			"title": "The Marvels of Number Theory and Prime Numbers",
			"subtitle": "",
			"author": "Aadesh Taneja",
			"author_contact": "",
			"publish_date": "August 6, 2023",
			"image_source": "https://images.pexels.com/photos/1314529/pexels-photo-1314529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"post_destination": "/Posts/The-Marvels-of-Number-Theory-and-Prime-Numbers.html"
		},
		{
			"title": "Unsolvable Simplicity: The Collatz Conjecture",
			"subtitle": "A look into a Mathematical Puzzle that has stumped Experts for Decades",
			"author": "Gülin Gürbüz",
			"author_contact": "",
			"publish_date": "July 23, 2023",
			"image_source": "https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/Unsolvable-Simplicity-the-Collatz-Conjecture.html"
		},
		{
			"title": "The Concept of Numbers",
			"subtitle": "The Key to Unlocking the Mysteries of the Universe",
			"author": "Ashley Lim",
			"author_contact": "",
			"publish_date": "July 23, 2023",
			"image_source": "https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
			"post_destination": "/Posts/The-Concept-Of-Numbers.html"
		},
		{
			"title": "The Power of Machine Learning in Mathematics: Transforming STEM",
			"subtitle": "",
			"author": "Aadesh Taneja",
			"author_contact": "",
			"publish_date": "July 7, 2023",
			"image_source": "https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The_Power_of_Machine_Learning_in_Mathematics-_Transforming_STEM.html"
		},
		{
			"title": "Statistics and their Relevance in Grading",
			"subtitle": "",
			"author": "Vincent Hui",
			"author_contact": "",
			"publish_date": "March 8, 2023",
			"image_source": "https://c0.wallpaperflare.com/preview/241/384/859/analysis-analytics-analyzing-annual.jpg",
			"post_destination": "/Posts/statistics-in-grading.html"
		},
		{
			"title": "The Application of Sorting Algorithms in N-Dimensional Space",
			"subtitle": "",
			"author": "Christian Hall",
			"author_contact": "",
			"publish_date": " January 21, 2023",
			"image_source": "https://images.unsplash.com/photo-1642952469120-eed4b65104be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The-application-of-sorting-algorithms-in-N-dimensional-space.html"
		},
		{
			"title": "The Use of Mapping Elements",
			"subtitle": "",
			"author": "Uday Nambeesan",
			"author_contact": "",
			"publish_date": "January 20, 2023",
			"image_source": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"post_destination": "/Posts/The-use-of-mapping-elements.html"
		},
		{
			"title": "History of the Golden Ratio and Its Relation to Beauty",
			"subtitle": "",
			"author": "Min Khant Oakkar",
			"author_contact": "",
			"publish_date": "September 5, 2022",
			"image_source": "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/History-of-golden-ratio-and-its-relation-to-beauty.html"
		},
		{
			"title": "Reference Frames & Galileo Transformation Formulas",
			"subtitle": "",
			"author": "İdil Doğa Türkmen",
			"author_contact": "",
			"publish_date": "August 9, 2022",
			"image_source": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"post_destination": "/Posts/Reference-frames-and-galileo-transformation-formulas.html"
		},
		{
			"title": "Proof of Fermat's Last Theorem with Trigonometry",
			"subtitle": "",
			"author": "İdil Doğa Türkmen",
			"author_contact": "",
			"publish_date": "April 11, 2022",
			"image_source": "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aHMlMjB0cmlnb25vbWV0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
			"post_destination": "/Posts/Proof-of-Fermats-Last-Theorem"
		}
	]

}

/* A chunk of random stuffs... */
const group_list = ["sci", "tech", "eng", "math"];
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
  renderedPosts = document
    .getElementsByClassName(`${group}-body`)[0]
    .getElementsByClassName("post").length;
  maxPosts = Post_List[group].length;
  number = number + renderedPosts;
  if (number > maxPosts) {
    number = maxPosts;
  }
  for (let i = renderedPosts; i < number; i++) {
    postContainer = corresp_post_cont_dict[group].getElementsByClassName("post-body")[0];
    postContainer.innerHTML += `<div class="post" style="width: 100%; display: table;  border-radius: 18px;">
                                        <div style="display: table-row;">
                                            <div class="image-holder">
                                            <div class="preview-image" style="background-image: url('${Post_List[group][i].image_source}');"></div>
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
  }
  if (number == maxPosts) {
    document.getElementById(`${group}-load-more`).style.display = "none";
  } // Remove the 'Load More' button when all available posts are rendered.
  resizeHandler(null); // In case the website is in portrait mode when the function was called.
}

// Calling the post render function to render the post on page load.
for (i in group_list) {
  postRender(group_list[i], default_post_number);
}

function isArrayInArray(array, item) {
  var item_as_string = JSON.stringify(item);
  var contains = array.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}

function search_posts(query) {
  document.getElementById("search-results").innerHTML =
    "<p style='position-relative; left: 5%; margin: 9px 0;'><b>Results Found:</b> <span id='no-of-search-found'></span></p>";
  matches_found = [];

  if (query != 0) {
    for (grIndex in group_list) {
      for (post_index in Post_List[group_list[grIndex]]) {
        for (keyword in Post_List[group_list[grIndex]][post_index]) {
          if (
            ![
              "image_source",
              "author_contact",
              "post_destination",
              "group",
            ].includes(keyword)
          ) {
            if (
              Post_List[group_list[grIndex]][post_index][keyword]
                .toLowerCase()
                .includes(query.toLowerCase())
            ) {
              if (!isArrayInArray(matches_found, [grIndex, post_index])) {
                matches_found.push([grIndex, post_index]);
              }
            }
          }
        }
      }
    }
  }
  for (post in matches_found) {
    postGroup = group_list[matches_found[post][0]];
    postIndex = matches_found[post][1];
    document.getElementById("search-results").innerHTML += `
			<div style="width: 100%; display: table;  border-radius: 18px;">
				<div style="display: table-row;">
					<div class="res-image-holder">
						<div class="res-preview-image" style="background-image: url('${Post_List[postGroup][postIndex].image_source}');"></div>
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
  if (matches_found == 0) {
    document.getElementById("search-results").innerHTML += `
        <img class="no-res-img" src="../assets/no_results_found.png">
        <p class="no-res-line">No results found for the query &OpenCurlyQuote;${query}&CloseCurlyQuote;. Please try searching by some other query.</p>
    `;
  }
  document.getElementById("search-results").innerHTML += "<hr>";
  document.getElementById("no-of-search-found").innerHTML =
    matches_found.length;
  resizeHandler(null);
}

resizeHandler(null);
