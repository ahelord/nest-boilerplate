import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { TodosRepository } from '../../infrastructure/database/repositories/todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.getInstance().save(createTodoDto);
  }

  async findAll() {
    return await this.todosRepository.findCustom();
  }

  async findOne(id: number) {
    return await this.todosRepository.getInstance().findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${updateTodoDto.title} todo`;
  }

  remove(id: number) {
    return this.todosRepository.getInstance().delete({ id });
  }
}
