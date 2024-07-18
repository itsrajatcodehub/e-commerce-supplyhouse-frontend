import './Home.css';
'use client'
import { IoMdCart } from "react-icons/io";
import { useEffect, useRef, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, PopoverGroup, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdAlternateEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { HiLightBulb } from "react-icons/hi";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import React from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { RiWechatLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";


const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const [selectedValue, setSelectedValue] = useState('admin');

    const selectedLoginMode = (event: any) => {
        const value = event.target.value;
        setSelectedValue(value);
    };

    useEffect(() => {
    }, [selectedValue]);

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const images = [
        {
            label: '1',
            imgPath:
                'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1cea5637dc7361ce.jpg?q=20',
        },
        {
            label: '2',
            imgPath:
                'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f0d00994e1c3cb28.jpg?q=20',
        },
        {
            label: '3',
            imgPath:
                'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3a0edbfa89f89763.jpg?q=20',
        },
        {
            label: '4',
            imgPath:
                'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8d7c5a9f8990a71b.jpg?q=20',
        },
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const posts = [
        {
            id: 1,
            description:
                'Keyboards & Mouse',
            price: 'Starts from 799',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/xif0q/keyboard/gaming-keyboard/b/s/q/f2023-aula-original-imagnhc44uakb4zb.jpeg?q=80',
        },
        {
            id: 2,
            description:
                'Earbuds & Headphones',
            price: 'Starts from 999',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80',
        },
        {
            id: 3,
            description:
                'Led & Monitors',
            price: 'Starts from 5999',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/xif0q/monitor/z/d/8/va2209-h-full-hd-21-5-2022-va2209-h-viewsonic-original-imagqhnwjfrdj2h7.jpeg?q=80',
        },
        {
            id: 4,
            description:
                'Printers & Scanners',
            price: 'Starts from 7999',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/xif0q/printer/1/n/w/-original-imagtzwyfxszzwpk.jpeg?q=80',
        },
        {
            id: 5,
            description:
                'Stationary',
            price: 'Starts from 99',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=80',
        },
        {
            id: 6,
            description:
                'Shavers',
            price: 'Starts from 799',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=80',
        },
        {
            id: 7,
            description:
                'Toys',
            price: 'Starts from 199',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=80',
        },
        {
            id: 8,
            description:
                'Car Toys',
            price: 'Starts from 499',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80',
        },
        {
            id: 9,
            description:
                'Shoes & Slippers',
            price: 'Starts from 299',
            imageUrl:
                'https://rukminim2.flixcart.com/image/240/240/xif0q/shoe/n/v/u/7-jimmy-white-7-clymb-white-original-imah2gascgg6pkva.jpeg?q=80',
        },
        {
            id: 10,
            description:
                'Smart Watches',
            price: 'Starts from 999',
            imageUrl:
                'https://rukminim2.flixcart.com/flap/210/210/image/24ed491dc3ff9e8a.jpg?q=80',
        },
        {
            id: 11,
            description:
                'Dry Fruits',
            price: 'Starts from 699',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=80',
        },
        {
            id: 12,
            description:
                'Bicycle',
            price: 'Starts from 5999',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=80',
        },
        {
            id: 13,
            description:
                'Tea & Coffee',
            price: 'Starts from 299',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80',
        },
        {
            id: 14,
            description:
                'Projectors',
            price: 'Starts from 1299',
            imageUrl:
                'https://rukminim2.flixcart.com/image/210/210/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=80',
        },
        {
            id: 15,
            description:
                'Wireless Cameras',
            price: 'Starts from 12299',
            imageUrl:
                'https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70',
        }
    ]

    const normalHours = [
        { id: 1, days: 'Monday - Thursday', stime: '8 AM', etime: '7:45 PM' },
        { id: 2, days: 'Friday', stime: '9 AM', etime: '7:45 PM' },
        { id: 3, days: 'Saturday', stime: '9 AM', etime: '5:45 PM' },
        { id: 4, days: 'Sunday', stime: '9 AM', etime: '5:45 PM' },
    ]

    const [specialHours, setSpecialHours] = useState([
        { id: 1, text: 'Special Hours', stime: '8:45 AM', etime: '7:45 PM' }
    ]);


    const connectMode = [
        { id: 1, text: 'Call', contact: '888-551-7600', available: 'Available 8 AM', icon: <IoIosCall /> },
        { id: 2, text: 'Text', contact: '888-551-7600', available: 'Available 8 AM', icon: <MdOutlineMessage /> },
        { id: 3, text: 'Live Chat', contact: '', available: 'Available 8 AM', icon: <RiWechatLine /> },
        { id: 4, text: 'Email', contact: '', available: 'Response by Sun', icon: <MdOutlineMail /> }
    ]

    const [openAdmin, setOpenAdmin] = useState(false);


    const [email, setEmail] = useState('testaccount@gmail.com');
    const [password, setPassword] = useState('12345');

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const checkAdmin = (event: any) => {
        event.preventDefault();
        console.log("hi");
        console.log("Email:", email);
        console.log("Password:", password);

        if (email == 'testaccount@gmail.com' && password == '12345') {
            console.log("user exists !");
            setOpen(false);
            setOpenAdmin(true);
        }
    }

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    const handleStartTimeChange = (event: any) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event: any) => {
        setEndTime(event.target.value);
    };

    const convertTo12HourFormat = (time: any) => {
        const [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const adjustedHours = hours % 12 || 12;
        return `${adjustedHours}:${minutes} ${period}`;
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Start:', startTime);

        console.log('Start Time:', convertTo12HourFormat(startTime));
        console.log('End Time:', convertTo12HourFormat(endTime));

        if (startTime != '00:00' && endTime != '00:00') {
            const newSpecialHours = specialHours.map((item) => ({
                ...item,
                stime: convertTo12HourFormat(startTime),
                etime: convertTo12HourFormat(endTime),
            }));
            setSpecialHours(newSpecialHours);
            setOpenAdmin(false);
        }else{
            console.log("please select timings");
            
        }
        
        if (message.length > 0 && message) {
            messageToCustomerGet(message);
        }
        
        if(!isChecked){
            setOpenAdmin(false);
        }

    };


    const [message, setMessage] = useState(['']);
    const [messageToCustomer, messageToCustomerGet] = useState(['Our Customer Support will be opening late today. We apologize for any inconvenience.'])
    const handleTextareaChange = (event: any) => {
        setMessage(event.target.value);
    };

    return (
        <>
            <div className="container">
                <header className="bg-white mt-5">
                    <nav aria-label="Global" className="mx-auto flex items-center justify-between lg:px-8">
                        {/* <div className="flex" style={{marginLeft: '-35px'}}> */}
                        <div className="flex">
                            <a href="#" className="-m-1.5 p-1.5">
                                <IoMdCart className="h-8 w-auto" />
                            </a>

                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <PopoverGroup className="hidden lg:flex lg:gap-x-12 mr-5 ml-5">

                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-gray-300"
                                    placeholder="Search Products"
                                    required

                                />
                            </div>

                            {/* <Popover className="relative pt-3">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Product
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover> */}


                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pt-3">
                                Products
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pt-3">
                                Trending
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pt-3">
                                Electronics
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pt-3">
                                Offers
                            </a>
                        </PopoverGroup>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setOpen(true)}>
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>



                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-10" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {/* search bar */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="search"
                                                id="default-search"
                                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-gray-300"
                                                placeholder="Search Products"
                                                required
                                            />
                                        </div>

                                        {/* <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure> */}

                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Product
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Features
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Marketplace
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Company
                                        </a>
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setOpen(true)}
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className="body">
                    <div className="slider">
                        <Box sx={{ flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 20,
                                    pl: 2,
                                    bgcolor: 'background.default',
                                }}
                            >
                            </Paper>

                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 300,
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </div>
                    <div className="items border-t border-gray-250 mt-10">
                        <div className="bg-white">
                            <div className="mx-auto px-6 lg:px-8">
                                <div className="upper-card mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                    {posts.map((post) => (
                                        <article key={post.id} className="card flex max-w-xl flex-col items-center justify-between p-4 shadow-lg rounded-lg mb-1.5">
                                            <div className="group relative flex-grow flex justify-center items-center">
                                                <img alt="" src={post.imageUrl} className="h-30 w-80 object-contain" style={{ height: '200px' }} />
                                            </div>
                                            <div className="relative flex items-center gap-x-4 mt-4 w-full">
                                                <div className="text-sm leading-6 w-full text-center">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href="#!" className='text-xl'>
                                                            <span className="absolute inset-0" />
                                                            {post.description}
                                                        </a>
                                                    </p>
                                                    <p className='text-center'>{post.price}</p>
                                                </div>
                                            </div>
                                        </article>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timings border-t border-gray-250 mt-10">
                    <div className="bg-white py-12 sm:py-13">
                        <div className="mx-auto max-w-full">
                            <div className="grid grid-cols-1 text-center">

                                <dl className="fig-grid w-[29%] m-auto p-0">
                                    <figcaption className="bg-red-300 py-10 px-20">
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="mx-auto h-14 w-14 rounded-full"
                                        />
                                        <div className="mt-4 items-center justify-center space-x-3 text-base">
                                            <div className="font-semibold text-gray-900 font-bold">Questions ?</div>
                                            <br />
                                            <div className="text-gray-600">
                                                {messageToCustomer}
                                            </div>
                                        </div>
                                    </figcaption>

                                    <figcaption className="bg-cyan-100 py-10 px-5" style={{ paddingLeft: '120px' }}>
                                        {connectMode.map((x) => (
                                            <div key={x.id} className="mt-4 space-y-6 w-max text-base text-left">
                                                <div className="flex items-center space-x-4">
                                                    <span className='text-2xl'>{x.icon}</span>
                                                    <div>
                                                        <p className="font-semibold">
                                                            <span className='text-gray-500'>{x.text}</span> <span>{x.contact}</span>
                                                        </p>
                                                        <p className="text-gray-500">{x.available}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </figcaption>

                                    <figcaption className="bg-red-300 py-10 px-20">
                                        <div className="mt-4 items-left justify-center space-x-3 text-base">
                                            <div className="text-gray-600 text-left m-auto w-fit">
                                                {specialHours.map((x) => (
                                                    <div key={x.id} className="special text-red-500" hidden={!isChecked}>
                                                        <div className='font-bold'>{x.text}</div>
                                                        <div>{x.stime + '-' + x.etime}</div>
                                                    </div>
                                                ))}

                                                {normalHours.map((x) => (
                                                    <div key={x.id} className="normal mt-2">
                                                        <div className='font-bold'>{x.days}</div>
                                                        <div>{x.stime + '-' + x.etime}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </figcaption>
                                </dl>

                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <IoMdCart className="h-8 w-auto text-white" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SupplyHouse.com</span>

                            </a>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">SupplyHouse.com</a>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>


            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                    </div>
                                </TransitionChild>
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6 flex justify-between">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                            <div className='text-2xl'>Login / Signup</div>
                                        </DialogTitle>

                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="relative z-50 rounded-md text-gray-300 text-darkgrey"
                                            style={{ position: 'relative', zIndex: 50 }}
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                        </button>

                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6 mt-10">

                                        <div className='flex justify-between'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="admin"
                                                    name="radio-buttons-group"
                                                    row>
                                                    <FormControlLabel value="admin" control={<Radio />} label="Admin" onChange={selectedLoginMode} />
                                                    <FormControlLabel value="customer" control={<Radio />} label="Customer" onChange={selectedLoginMode} />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        {/* form start */}
                                        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                                            >
                                                <div
                                                    style={{
                                                        clipPath:
                                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                                    }}
                                                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                                />
                                            </div>
                                            <form style={{ marginTop: '-110px', marginLeft: '-30px' }} onSubmit={checkAdmin} method="POST">
                                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="email" className="flex block text-sm font-semibold leading-6 text-gray-900">
                                                            Enter your Email
                                                        </label>
                                                        <div className="relative mt-2.5">
                                                            <MdAlternateEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                value={email}
                                                                autoComplete="email"
                                                                className="block w-full pl-10 rounded-md border border-black px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="Enter your Email"
                                                                disabled={selectedValue === 'customer'}
                                                                style={{ cursor: selectedValue === 'customer' ? 'not-allowed' : 'auto' }}
                                                                onChange={handleEmailChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                                                            Enter your Password
                                                        </label>
                                                        <div className="relative mt-2.5">
                                                            <IoKeySharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                                                            <input
                                                                id="password"
                                                                name="password"
                                                                type="password"
                                                                value={password}
                                                                autoComplete="organization"
                                                                className="block w-full pl-10 rounded-md border border-black px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none border-1 border-black"
                                                                placeholder='Enter your Password'
                                                                disabled={selectedValue === 'customer'}
                                                                style={{ cursor: selectedValue === 'customer' ? 'not-allowed' : 'auto' }}
                                                                onChange={handlePasswordChange}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-10">
                                                    <button
                                                        type="submit"
                                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* form end */}

                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>


            <Dialog open={openAdmin} onClose={setOpenAdmin} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                    </div>
                                </TransitionChild>
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6 flex justify-between">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                            <div className='text-2xl'>Special Hours Configuration</div>
                                        </DialogTitle>

                                        <button
                                            type="button"
                                            onClick={() => setOpenAdmin(false)}
                                            className="relative z-50 rounded-md text-gray-300 text-darkgrey"
                                            style={{ position: 'relative', zIndex: 50 }}
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                        </button>

                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6 mt-10">

                                        <div className="flex items-center">
                                            <input
                                                id="checked-checkbox"
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                style={{ zIndex: 10 }}
                                            />
                                            <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-black">
                                                Special Hours
                                            </label>
                                        </div>


                                        {/* form start */}
                                        <div className="isolate bg-white mt-10">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                                            >
                                                <div
                                                    style={{
                                                        clipPath:
                                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                                    }}
                                                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                                />
                                            </div>

                                            <div className="message mb-5">
                                                {/* <h2>Message to Customers</h2> */}

                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message to Customers</label>
                                                <textarea id="message" rows={5} value={message} onChange={handleTextareaChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a message for your customers..." />

                                            </div>

                                            <form className="w-full mx-auto grid grid-cols-2 gap-4 ml-0" onSubmit={handleSubmit}>
                                                <div>
                                                    <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                                        Start time:
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="time"
                                                            id="start-time"
                                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            value={startTime}
                                                            onChange={handleStartTimeChange}
                                                            required
                                                            disabled={!isChecked}
                                                            style={{ cursor: !isChecked ? 'not-allowed' : 'auto' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                                        End time:
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="time"
                                                            id="end-time"
                                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            value={endTime}
                                                            onChange={handleEndTimeChange}
                                                            required
                                                            disabled={!isChecked}
                                                            style={{ cursor: !isChecked ? 'not-allowed' : 'auto' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-10 flex grid grid-cols-2 gap-4 bottom-0" style={{ marginTop: '200px' }}>
                                                    <button
                                                        type="submit"
                                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        onClick={() => setOpenAdmin(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                        {/* form end */}

                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>

        </>
    )
}

export default Home;