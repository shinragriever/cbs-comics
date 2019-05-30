<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       
        $this->call(AuthorTableSeeder::class);
        $this->call(PublisherTableSeeder::class);
        $this->call(SeriesTableSeeder::class);
        $this->call(ComicsTableSeeder::class);
        
        
        // $this->call(PublishersTableSeeder::class);
        // $this->call(TodosTableSeeder::class);
        // $this->call(UsersTableSeeder::class);
    }
}
