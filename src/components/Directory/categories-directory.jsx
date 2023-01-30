import './categories-directory.styles.scss'
import CategoryItem from '../category-item/category-item'

function CategoriesDirectory({ categories }) {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
            })
            }
        </div>
    )
}

export default CategoriesDirectory