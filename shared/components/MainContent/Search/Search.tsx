"use client";
import { useState } from "react";

import { appConfig } from "@/config";
import Button from "@/shared/components/Button";
import { generateString, isValidHttpUrl } from "@/shared/utils";

import styles from "./Search.module.scss";

// TODO break on 630px

interface ShortenedLink {
    originalLink: string;
    shortenedLink: string;
}

const ShortenedLink = ({ originalLink, shortenedLink }: ShortenedLink) => {
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        if (!clicked) {
            navigator.clipboard.writeText(shortenedLink);
        }
        setClicked(!clicked);
    };

    return (
        <div className={styles.shortened__link}>
            <div className={styles.shortened__link__original}>
                {originalLink}
            </div>
            <div className={styles.shortened__link__shortened}>
                {shortenedLink}
            </div>
            <div className={styles.shortened__link__button}>
                <Button
                    onClick={handleOnClick}
                    primary={clicked ? false : true}
                    rounded={false}
                >
                    <div className={styles.shortened__link__button__text}>
                        {clicked ? "Copied!" : "Copy"}
                    </div>
                </Button>
            </div>
        </div>
    );
};

const Search = () => {
    const [inputText, setInputText] = useState("");
    const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            fetchShorteningResults();
        }
    };

    const fetchShorteningResults = () => {
        const found = shortenedLinks.some((el) => el.originalLink == inputText);
        if (inputText != "" && !found) {
            if (isValidHttpUrl(inputText)) {
                const url = new URL(`${appConfig.apiUrl}/shortening`);
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify({ url: inputText }),
                })
                    .then((res) => {
                        if (res.status != 200) {
                            throw new Error(
                                `Request failed! Status code: ${res.status}`
                            );
                        }
                        return res.json();
                    })
                    .then((res) => {
                        const shortenedLink = {
                            originalLink: res.originalUrl,
                            shortenedLink: res.shortenedUrl,
                        };
                        const found = shortenedLinks.some(
                            (el) =>
                                el.originalLink == shortenedLink.originalLink
                        );
                        if (!found) {
                            setShortenedLinks([
                                ...shortenedLinks,
                                shortenedLink,
                            ]);
                        }
                    })
                    .catch((err) => alert(err.message));
            } else {
                alert(`Invalid URL provided: ${inputText}`);
            }
        }
    };

    return (
        <>
            <div className={styles.search}>
                <div className={styles.search__box}>
                    <input
                        type="text"
                        name="link"
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        placeholder={appConfig.search.placeholderText}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className={styles.search__button}>
                    <Button
                        onClick={fetchShorteningResults}
                        primary={true}
                        rounded={false}
                    >
                        <div className={styles.search__button__text}>
                            {appConfig.search.button.text}
                        </div>
                    </Button>
                </div>
            </div>
            <div className={styles.search__results}>
                {shortenedLinks.map((item, index) => {
                    return (
                        <div
                            className={styles.search__results__item}
                            key={index}
                        >
                            <ShortenedLink
                                originalLink={item.originalLink}
                                shortenedLink={item.shortenedLink}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Search;
