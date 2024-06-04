import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";
import { Tooltip } from '@chakra-ui/react'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="p-5 h-[100vh] w-[6rem] bg-gray-200 rounded-r-xl border border-gray-500 shadow-gray-400 shadow-lg fixed">
            <div className="flex flex-col gap-10">
                <Tooltip label="Home"  >
                    <Link to="/home">
                        <div className="flex flex-row items-center">
                            <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                <img
                                    width="40"
                                    height="40"
                                    src="https://img.icons8.com/ios/50/home--v1.png"
                                    alt="home--v1"
                                />
                            </button>
                        </div>
                    </Link>
                </Tooltip>

                <Tooltip label="Discover"  >
                <Link to="/discover">
                    <div className="flex flex-row items-center">
                        <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/ios/50/compass--v1.png"
                                alt="compass--v1"
                            />
                        </button>
                        <p className="ml-[3rem] text-black text-lg hidden">Discover</p>
                    </div>
                </Link>
                </Tooltip>
                <Tooltip label="Search"  >
                <Link to="/search">
                    <div className="flex flex-row items-center">
                        <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/ios/50/search--v1.png"
                                alt="search--v1"
                            />
                        </button>
                        <p className="ml-[3rem] text-black text-lg hidden">Search</p>
                    </div>
                </Link>
                </Tooltip>
                <Tooltip label="Search by Body Part"  >
                <Link to="/bodypart">
                    <div className="flex flex-row items-center">
                        <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/ios/50/body.png"
                                alt="body"
                            />
                        </button>
                        <p className="ml-[3rem] text-black text-lg hidden">Body Part</p>
                    </div>
                </Link>
                </Tooltip>
                <Tooltip label="Search by Equipment"  >
                <Link to="/equipment">
                    <div className="flex flex-row items-center">
                        <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-dumbell-gym-flatart-icons-outline-flatarticons-2.png"
                                alt="external-dumbell-gym-flatart-icons-outline-flatarticons-2"
                            />
                        </button>
                        <p className="ml-[3rem] text-black text-lg hidden">Equipment</p>
                    </div>
                </Link>
                </Tooltip>
                <Tooltip label="Search by Target"  >
                <Link to="/target">
                    <div className="flex flex-row items-center">
                        <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-muscles-healthy-lifestyle-icongeek26-outline-icongeek26.png"
                                alt="external-muscles-healthy-lifestyle-icongeek26-outline-icongeek26"
                            />
                        </button>
                        <p className="ml-[3rem] text-black text-lg hidden">Target</p>
                    </div>
                </Link>
                </Tooltip>
            </div>

            <div className="mt-[5rem]">
            <Tooltip label="Change Theme"  >
                <label className="flex flex-row items-center">
                    <button onClick={toggleTheme}>
                        {theme === "light" ? (
                            <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                <img
                                    width="40"
                                    height="40"
                                    src="https://img.icons8.com/ios-filled/50/crescent-moon.png"
                                    alt="crescent-moon"
                                />
                            </button>
                        ) : (
                            <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                <img
                                    width="40"
                                    height="40"
                                    src="https://img.icons8.com/ios/50/000000/sun--v1.png"
                                    alt="sun--v1"
                                />
                            </button>
                        )}
                    </button>
                    <p className="ml-[3rem] text-black text-lg hidden"> Change Theme</p>
                </label>
                </Tooltip>
            </div>
        </nav>
    );
};

export default Navbar;
