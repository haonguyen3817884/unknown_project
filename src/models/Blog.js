class Blog {
    constructor(_id, blogTitle, blogImage, blogDetail, blogAuthorName, blogAuthorAvatar) {
        this._id = _id;
        this.blogTitle = blogTitle;
        this.blogImage = blogImage;
        this.blogDetail = blogDetail;
        this.blogAuthorName = blogAuthorName;
        this.blogAuthorAvatar = blogAuthorAvatar;
    }

    static _idKey() {
        return "_id";
    }

    static blogTitleKey() {
        return "blogTitle";
    }

    static blogImageKey() {
        return "blogImage";
    }

    static blogDetailKey() {
        return "blogDetail";
    }

    static blogAuthorNameKey() {
        return "blogAuthorName";
    }

    static blogAuthorAvatarKey() {
        return "blogAuthorAvatar";
    }

    static fromJson(jsonData) {
        let _id = jsonData[this._idKey()];
        let blogTitle = jsonData[this.blogTitleKey()];
        let blogImage = jsonData[this.blogImageKey()];
        let blogDetail = jsonData[this.blogDetailKey()];
        let blogAuthorName = jsonData[this.blogAuthorNameKey()];
        let blogAuthorAvatar = jsonData[this.blogAuthorAvatarKey()];

        return new Blog(_id, blogTitle, blogImage, blogDetail, blogAuthorName, blogAuthorAvatar);
    }

    static toJson(blog) {
        let _id = blog._id;
        let blogTitle = blog.blogTitle;
        let blogImage = blog.blogImage;
        let blogDetail = blog.blogDetail;
        let blogAuthorName = blog.blogAuthorName;
        let blogAuthorAvatar = blog.blogAuthorAvatar;

        return {
            _id: _id,
            blogTitle: blogTitle,
            blogImage: blogImage,
            blogDetail: blogDetail,
            blogAuthorName: blogAuthorName,
            blogAuthorAvatar: blogAuthorAvatar
        };
    }
}

export default Blog;