<?php

use Illuminate\Database\Seeder;

class SeriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('series')->insert(['name' =>'Seven to Eternity']);
        DB::table('series')->insert(['name' =>'Black Gas']);
        DB::table('series')->insert(['name' =>'Preacher']);
    }
}
