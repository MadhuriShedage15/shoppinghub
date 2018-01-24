package career.shoppinghubbackend.dao;

import java.util.List;

import career.shoppinghubbackend.dto.Category;

public interface CategoryDAO {

	List <Category> list();
	Category get(int id);
}
