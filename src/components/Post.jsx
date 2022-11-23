import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css"

export function Post({author, content, publishedAt}){

    const [comments, setComments] = useState(["Um comentário aleatório"])

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow( publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText("")
    }

    function deleteComment(comment){
        console.log(`Comentário deletado: ${comment}`)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>

                    <div className={styles.authorInfo}>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()}>
                    { publishedDateRelativeNow }
                </time>
            </header>

            <div className={styles.content}>
                { content.map(line => {
                    switch(line.type) {
                        case "paragraph":
                            return <p key={line.content}>{ line.content }</p>
                        case "link":
                            return <p key={line.content}><a href="#">{ line.content }</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    );
}