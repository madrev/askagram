class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.references :user, foreign_key: true, null: false
      t.string :title, null: false
      t.string :description

      t.timestamps null: false
    end
    add_index :questions, :title
    add_index :questions, :description
  end
end
