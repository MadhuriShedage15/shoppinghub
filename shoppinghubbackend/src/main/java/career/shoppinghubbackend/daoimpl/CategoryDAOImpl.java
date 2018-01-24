package career.shoppinghubbackend.daoimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import career.shoppinghubbackend.dao.CategoryDAO;
import career.shoppinghubbackend.dto.Category;

@Repository("categoryDAO")
public class CategoryDAOImpl implements CategoryDAO {

	private static List <Category> categories=new ArrayList<>();
	
	
	static{
		
		Category category=new Category();
		
		category.setId(1);
		category.setName("mobile");
		category.setDescription("one plus want to take and i will");
		
		categories.add(category);
		
		Category category1=new Category();
		category1.setId(2);
		category1.setName("Television");
		category1.setDescription("one plus want to take and i will");
		
		categories.add(category1);

		Category category2=new Category();
		category2.setId(3);
		category2.setName("Laptop");
		category2.setDescription("one plus want to take and i will");
		
		categories.add(category2);

	}
	
	@Override
	public List<Category> list() {
		// TODO Auto-generated method stub
		return categories;
	}

	@Override
	public Category get(int id) {
		for(Category category:categories){
			if(category.getId() == id) return category;
		}
		return null;
	}

}
