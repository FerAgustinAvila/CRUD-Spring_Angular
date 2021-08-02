package org.ferdev.springboot.backend.apirest.models.dao;

import org.ferdev.springboot.backend.apirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

}
