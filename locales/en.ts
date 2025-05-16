export default {
    myName: "mahya rastegari",
    resumeButton: "Download Resume",
    socialMedia: {
        github: "Github",
        linkedin: "Linkedin",
        telegram: "Telegram",
    },

    menu: {
      homeLabel: "Home",
      aboutLabel: "About Me",
      projectsLabel: "My Projects",
      contactLabel: "Contact Me"
    },
    dashboard: {

      skill : {
        skill1: "Frontend Developer",
        skill2:  "React Developer",
      },

      aboutMe: "I love learning and exploring new things.\n I enjoy building projects that are both practical and give users a good feeling.\n With passion and persistence, every challenge feels like a new opportunity to grow."
    },

    aboutMe: {
      title: "About Me",
      tabs: {
        tab1: "About Me",
        tab2: "Skills",
        tab3: "Education",
      }
    },
 
    projects: {
      title: "My Projects",
      error: {
        title: "fetch projects Error",
        btn: "reset"
      },
      notification: {
        error: "Failed to fetch projects"
      }
    },
 
    contactMe: {
      title: "Contact Me",
      
      notification: {
        success: "Message sent successfully",
        error: "Failed to send the message. Please try again."
      },
      label : {
        name: "your name",
        email: "your Email",
        subject: "Subject",
        message: "Message"
      },

      message: {
        nameRequired: "Please enter your name",
        emailRequired: "Please enter your email",
        emailPattern: "Invalid email format",
        subjectRequired: "Please enter the subject",
        messageRequired: "Please enter your message",
      },

      submitBtn: {
        title: "send Message",
        submittingTitle: "Sending your message...",

      },

    },

    error : {
      title: "Oops! Something went wrong",
      description: "It seems something isn’t working properly. Please try again or come back later.",      
       btn:"reset"
    },
 
    notFound: {
     title: "page not found | 404",
     btn: "go to home"
    }
  } as const