# Solution Code

Here is the completed solution code for the App.js file:

```JSX
    import { ChakraProvider } from "@chakra-ui/react";
    import Header from "./components/Header";
    import LandingSection from "./components/LandingSection";
    import ProjectsSection from "./components/ProjectsSection";
    import ContactMeSection from "./components/ContactMeSection";
    import Footer from "./components/Footer";
    import { AlertProvider } from "./context/alertContext";
    import Alert from "./components/Alert";

    function App() {
    return (
    <ChakraProvider>
        <AlertProvider>
        <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
        </main>
        </AlertProvider>
    </ChakraProvider>
    );
    }

    export default App;
```

Here is the completed solution code for the context/alertContext.js file:

```JSX
    import {createContext, useContext, useState} from "react";

    const AlertContext = createContext(undefined);

    export const AlertProvider = ({ children }) => {
    const [state, setState] = useState({
        isOpen: false,
        type: 'success',
        message: '',
    });

    return (
        <AlertContext.Provider
        value={{
            ...state,
            onOpen: (type, message) => setState({ isOpen: true, type, message }),
            onClose: () => setState({ isOpen: false, type: '', message: '' }),
        }}
        >
        {children}
        </AlertContext.Provider>
    );
    };

    export const useAlertContext = () => useContext(AlertContext);
```

Here is the completed solution code for the components/Header.js file:

```JSX
    import React, { useEffect, useRef } from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
    } from "@fortawesome/free-brands-svg-icons";
    import { Box, HStack } from "@chakra-ui/react";

    const socials = [
    {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    },
    {
    icon: faGithub,
    url: "https://www.github.com/sureskills",
    },
    {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sureskills/",
    },
    {
    icon: faMedium,
    url: "https://medium.com/@sureskills",
    },
    {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/sureskills",
    },
    ];

    /**
    * This component illustrates the use of both the useRef hook and useEffect hook.
    * The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
    * The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
    * Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
    */
    const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const headerElement = headerRef.current;
        if (!headerElement) {
        return;
        }
        if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        } else {
        headerElement.style.transform = "translateY(-200px)";
        }
        prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, []);

    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    }
    };
    return (
    <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        ref={headerRef}
    >
        <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <nav>
            <HStack spacing={8}>
                {socials.map(({ icon, url }) => (
                <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
                ))}
            </HStack>
            </nav>
            <nav>
            <HStack spacing={8}>
                <a href="#projects" onClick={handleClick("projects")}>
                Projects
                </a>
                <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
                </a>
            </HStack>
            </nav>
        </HStack>
        </Box>
    </Box>
    );
    };

    export default Header;
```

Here is the completed solution code for the components/Card.js file:

```JSX
    import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import React from "react";

    const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack
        color="black"
        backgroundColor="white"
        cursor="pointer"
        borderRadius="xl"
        >
        <Image borderRadius="xl" src={imageSrc} alt={title} />
        <VStack spacing={4} p={4} alignItems="flex-start">
            <HStack justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="md">
                {title}
            </Heading>
            </HStack>
            <Text color="#64748b" fontSize="lg">
            {description}
            </Text>
            <HStack spacing={2} alignItems="center">
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
        </VStack>
        </VStack>
    );
    };

    export default Card;
```

Here is the completed solution code for the components/Alert.js file:

```JSX
    import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    } from "@chakra-ui/react";
    import { useAlertContext } from "../context/alertContext";
    import { useRef } from "react";

    /**
    * This is a global component that uses context to display a global alert message.
    */
    function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success"

    return (
    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
    >
        <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    );
    }

    export default Alert;
```

Here is the completed solution code for the components/Footer.js file:

```JSX
    import React from "react";
    import {Box, Flex} from "@chakra-ui/react";

    const Footer = () => {
    return (
    <Box backgroundColor="#18181b">
        <footer>
        <Flex
            margin="0 auto"
            px={12}
            color="white"
            justifyContent="center"
            alignItems="center"
            maxWidth="1024px"
            height={16}
        >
            <p>Pete • © 2022</p>
        </Flex>
        </footer>
    </Box>
    );
    };

    export default Footer;
```

Here is the completed solution code for the components/FullScreenSection.js file:

```JSX
    import * as React from "react";
    import { VStack } from "@chakra-ui/react";

    /**
    * Illustrates the use of children prop and spread operator
    */
    const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
    <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
    >
        <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
        </VStack>
    </VStack>
    );
    };

    export default FullScreenSection;
```

Here is the completed solution code for the components/LandingSection.js file:

```JSX
    import React from "react";
    import { Avatar, Heading, VStack } from "@chakra-ui/react";
    import FullScreenSection from "./FullScreenSection";

    const greeting = "Hello, I am Pete!";
    const bio1 = "A frontend developer";
    const bio2 = "specialized in React";

    const LandingSection = () => (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    >
    <VStack spacing={16}>
        <VStack spacing={4} alignItems="center">
        <Avatar
            src="https://i.pravatar.cc/150?img=7"
            size="2xl"
            name="Your Name"
        />
        <Heading as="h4" size="md" noOfLines={1}>
            {greeting}
        </Heading>
        </VStack>
        <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
            {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
            {bio2}
        </Heading>
        </VStack>
    </VStack>
    </FullScreenSection>
    );

    export default LandingSection;
```

Here is the completed solution code for the components/ProjectsSection.js file:

```JSX
    import React from "react";
    import FullScreenSection from "./FullScreenSection";
    import { Box, Heading } from "@chakra-ui/react";
    import Card from "./Card";

    const projects = [
    {
    title: "React Space",
    description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
    title: "React Infinite Scroll",
    description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
    title: "Photo Gallery",
    description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    },
    {
    title: "Event planner",
    description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    },
    ];

    const ProjectsSection = () => {
    return (
    <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
    >
        <Heading as="h1" id="projects-section">
        Featured Projects
        </Heading>
        <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        >
        {projects.map((project) => (
            <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/rgommezz/react-native-offline"
            imageSrc={project.getImageSrc()}
            />
        ))}
        </Box>
    </FullScreenSection>
    );
    };

    export default ProjectsSection;
```

Here is the completed solution code for the components/ContactMeSection.js file:

```JSX
    import React, {useEffect} from "react";
    import { useFormik } from "formik";
    import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    } from "@chakra-ui/react";
    import * as Yup from 'yup';
    import FullScreenSection from "./FullScreenSection";
    import useSubmit from "../hooks/useSubmit";
    import {useAlertContext} from "../context/alertContext";

    /**
    * Covers a complete form implementation using formik and yup for validation
    */
    const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        type: "hireMe",
        comment: "",
    },
    onSubmit: (values) => {
        submit('https://john.com/contactme', values);
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    });

    useEffect(() => {
    if (response) {
        onOpen(response.type, response.message);
        if (response.type === 'success') {
        formik.resetForm();
        }
    }
    }, [response]);

    return (
    <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}
    >
        <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
            Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                    Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                </Select>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
                </Button>
            </VStack>
            </form>
        </Box>
        </VStack>
    </FullScreenSection>
    );
    };

    export default ContactMeSection;
```

Here is the completed solution code for the hooks/useSubmit.js file:

```JSX
    import {useState} from "react";

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    /**
    * This is a custom hook that can be used to submit a form and simulate an API call
    * It uses Math.random() to simulate a random success or failure, with 50% chance of each
    */
    const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
        await wait(2000);
        if (random < 0.5) {
        throw new Error("Something went wrong");
        }
        setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        })
    } catch (error) {
        setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
        })
    } finally {
        setLoading(false);
    }
    };

    return { isLoading, response, submit };
    }

    export default useSubmit;
```

In a previous video, you were introduced to a possible solution for the portfolio page, where most of the concepts you learned over the duration of this course were applied in one way or another. However, there are still some interesting extras about the solution that will be illustrated in this reading.

## Header animation

In the Header.js component, there are two React core hooks being used: useRef and useEffect.

Those two are used in conjunction to achieve the smooth animation of the header. If you run the application, you can see that the header hides when I am scrolling down, and shows up when I am scrolling back up.

To implement this behavior, I have to use a side effect and subscribe to the scroll event on the window object using window.addEventListener.

It’s important to remove all subscriptions before the unmounting phase. For that, I have to return a function inside useEffect that performs that task. That’s the window.removeEventListener call you see executed inside that function.

```JSX
    useEffect(() => {
    const handleScroll = () => {
        // Business logic
      };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
```

To animate the header, you need to deal with its underlying DOM node and apply some style transition. Do you recall the React way to do that? If you said useRef, you guessed right! That’s what I am doing on the container Box and headerRef holds a reference to the underlying <div> node.

```JSX
    const Header = () => {
    const headerRef = useRef(null);

      …
      return (
        <Box
        ref={headerRef}
          {...}
        >
          …
        </Box>
      );
    };
```

Finally, handleScroll is the handler function that will be called every time there is a change in the vertical scroll position.

The meat of this function resides in the comparison between the previous value and the new value. That determines the direction of the scroll and which style I should apply in order to either show or hide the header. Since I am using transition properties in the container Box component, the change is animated.

```JSX
    useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const headerElement = headerRef.current;
        if (!headerElement) {
        return;
        }
        if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        } else {
        headerElement.style.transform = "translateY(-200px)";
        }
        prevScrollPos = currentScrollPos;
      }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    …
      return (
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        ref={headerRef}
        >
         …
        </Box>
      );
```

## Header navigation

There is another neat trick I would like to show you, which also happens in the Header component.

Let’s see what happens when I click on one of the header sections. Do you see how it nicely animates and scrolls into its position on the page? Let me show you how simple it is to implement something like that. Coming back to the code, I have this handleClick function that is invoked when I click on one of the header navigation items, either Projects or Contact Me.

```JSX
    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
```

I have defined some ids in other sections of the page. For instance, the header of the projects section has an id called project-section. The handleClick function is called with the anchor name depending on where the navigation should happen, as per the code below:

```JSX
    <HStack spacing={8}>
      <a href="#projects" onClick={handleClick("projects")}>
        Projects
      </a>
      <a href="#contactme" onClick={handleClick("contactme")}>
        Contact Me
      </a>
    </HStack>
```

To access that DOM element, you can then use document.getElementById and pass the corresponding ID. Once you have it, you can call element.scrollIntoView with an object as parameter, setting behavior as smooth and block start. Nice and simple, isn’t it?

## Formik and Yup validation

[Formik](https://formik.org/docs/overview) works very nicely with [Yup](https://github.com/jquense/yup), an open source library that allows you to define validation rules in a declarative way. Let’s break down in detail the rules set for the Contact Me form, as part of the useFormik hook. useFormik hook comes with a validationSchema option as part of its configuration object.

```JSX
    const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        type: "hireMe",
        comment: "",
      },
    onSubmit: (values) => {
        submit('https://john.com/contactme', values);
      },
    validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        comment: Yup.string()
          .min(25, "Must be at least 25 characters")
          .required("Required"),
      }),
    });
```

For the firstName field, the rule states that it has to be a string and it can’t be empty. If empty, Formik will register an error message with the label “Required”.

```JSX
    firstName: Yup.string().required("Required"),
```

The email input is also required. Observe how Yup already provides us with common validators out of the box, like one to verify that what users type is a valid email. If incorrect, Formik will register an error on that input with the error message “Invalid email address”. Quite straightforward right?

```JSX
    email: Yup.string().email("Invalid email address").required("Required"),
```

Finally, I am making the comment field mandatory, with a minimum length of 25 characters.

```JSX
    comment: Yup.string()
    .min(25, "Must be at least 25 characters")
    .required("Required"),

```
