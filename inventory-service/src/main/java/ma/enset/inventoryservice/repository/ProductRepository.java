package ma.enset.inventoryservice.repository;

import ma.enset.inventoryservice.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author mohamedyoussfi
 **/
public interface ProductRepository extends JpaRepository<Product,String> {
}
