from datetime import datetime
import json
from flask import Flask, abort, jsonify, request, abort
from flask_cors import CORS
from sqlalchemy import Integer
from models import setup_db, Product, Category

def paginate(page, results):
    start = (page - 1) * 20
    end = page * 20
    return results[start: end]
    
    

def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)
    setup_db(app)
    
    @app.route('/Products')
    def get_paginated_products():
        page = request.args.get('page', 1, int)
        
        query = [query.format() for query in Product.query.all()]
        results = paginate(page, query)
        if len(results) == 0:
            abort(400)
        
        return jsonify({
            'success': True,
            'page': page,
            'products': results
        })
    
    @app.route('/Products', methods=['POST'])
    def filter_products():
        try:
            page = request.args.get('page', 1, int)
            body = request.get_json()

            price_to = body.get('price_to', None)
            search = body.get('search', None)
            
            if price_to == None:
                query = Product.query.filter(Product.name.ilike('%' + str(search) + '%')).all()
            elif search == None:
                query = Product.query.filter(Product.price < price_to - 1).all()
            else:
                query = Product.query.filter(Product.price < price_to - 1).filter(Product.name.ilike('%' + str(search) + '%')).all()
                
            queries = [data.format() for data in query]
            #.filter(Product.price > price_to - 1)
            
            results = paginate(page, queries)
            if len(results) == 0:
                print('failed ')
                abort(400)
            
            return jsonify({
                'success': True,
                'products': results
            })
        except Exception as e:
            print(e)
            abort(400)
        
    @app.route('/Products/<int:id>')
    def get_product_details(id):
        result = Product.query.get(id).format()
        
        return jsonify({
            'success': True,
            'product': result
        })
        
    @app.route('/Categories')
    def get_categories():
        results = Category.query.all()
        
        return jsonify({
            'success': True,
            'products': [query.format() for query in results]
        })
        # return str([query.format() for query in results])
    
    @app.route('/Categories/<int:id>/Products')
    def get_products_by_category(id):
        category = Category.query.get(id)
        products = [query.format() for query in Product.query.filter(Product.category_id == id)]
        
        return jsonify({
            'success': True,
            'Products': products,
            'category': category.name
        })
    
    return app
    