"use client"

import '../styles.scss'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export default function Editor() {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Hello World! 🌎️</p>',
        editorProps: {
            attributes: {
                class: 'prose max-w-none w-full focus:outline-none',
                spellCheck: "false"
            }
        }
    })

    return (
        <div>
            <h1>
                Ahoj !!!
            </h1>
            <EditorContent editor={editor} />
        </div>
    )
}