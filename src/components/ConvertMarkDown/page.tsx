"use client"
import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

import "./style.css"
function ConvertMarkdown({
    params,
} : {
    params: {data: string};
}) {
    const [text, setText] = useState('');


    useEffect(() => {
        // Chuyển đổi Markdown sang HTML khi component được mount
        console.log("data content md: ", params.data);
        remark()
            .use(html)
            .process(params.data)
            .then((file) => {
                // Cập nhật state với HTML kết quả
                setText(String(file));
            });
    }, []);


    return (
        <div className="remark-content prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: text }} />
    );
}


export default ConvertMarkdown;