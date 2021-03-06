import {Column, Entity} from "../../../src/index";
import {PrimaryColumn} from "../../../src/decorator/columns/PrimaryColumn";

@Entity("sample01_post")
export class Post {

    @PrimaryColumn("integer", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column("int", {
        nullable: false
    })
    likesCount: number;

}